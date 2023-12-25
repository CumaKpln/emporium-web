// productController.js
const jwt = require("jsonwebtoken");
const fs = require("fs").promises;
const path = require("path");
const { sequelize } = require("../models/index");
const Product = require("../models/product");
const Car = require("../models/products/car");
const Computer = require("../models/products/computer");
const Home = require("../models/products/home");
const Land = require("../models/products/land");
const Motorcycle = require("../models/products/motorcycle");
const Phone = require("../models/products/phone");
const User = require("../models/user");

//! CREATE PRODUCT İŞLEMLERİ

const createProduct = async (req, res) => {
  const {
    productTitle,
    productName,
    model,
    description,
    category,
    subcategory,
    province,
    district,
    neighbourhood,
    brand,
    series,
    color,
    gear,
    price,
    ram,
    gpu,
    processor,
    memory,
    squareMeters,
    room,
    propertyType,
    photoPath,
  } = req.body;
  const photoData = await fs.readFile(photoPath);
  const tableName = subcategory.toLowerCase();
  let specificFields;

  try {
    // Token kontrolü
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Yetkilendirme başarısız. Token bulunamadı." });
    }

    // Token doğrulama
    const decodedToken = jwt.verify(token, "jwtSecretKey123456789");
    const userId = decodedToken.userId;

    // Kullanıcı kontrolü
    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(401)
        .json({ error: "Yetkilendirme başarısız. Kullanıcı bulunamadı." });
    }

    // Transaction başlatın
    await sequelize.transaction(async (t) => {
      // Product tablosuna yeni bir ürün ekleyin
      const createdProduct = await Product.create(
        {
          productTitle,
          productName,
          description,
          category,
          subcategory,
          province,
          district,
          neighbourhood,
          userId,
          photo: photoData,
        },
        { transaction: t }
      );

      // Diğer tablolara veri eklemek için tablo adını belirleyin
      switch (tableName) {
        case "car":
          specificFields = { brand, series, color, gear, price };
          break;
        case "motorcycle":
          specificFields = { brand, series, color, gear, price };
          break;
        case "home":
          specificFields = { squareMeters, room, propertyType, price };
          break;
        case "land":
          specificFields = { propertyType, squareMeters, price };
          break;
        case "computer":
          specificFields = { brand, model, ram, gpu, processor, memory, price };
          break;
        case "phone":
          specificFields = {
            brand,
            model,
            color,
            ram,
            processor,
            memory,
            price,
          };
          break;
        default:
          specificFields = {};
          break;
      }

      // İlgili tabloya yeni bir ürün ekleyin
      await sequelize.models[tableName].create(
        { ...specificFields, productId: createdProduct.id },
        { transaction: t }
      );
    });
    // Başarılı bir şekilde eklendiyse, istemciye başarı mesajı gönderin
    res.status(201).json({ message: "Ürün başarıyla eklendi" });
  } catch (error) {
    // Hata oluştuğunda istemciye hata mesajını gönderin
    console.error("Ürün eklenirken bir hata oluştu:", error.message);
    res.status(500).json({ error: "Ürün eklenirken bir hata oluştu" });
  }
};
//! GETONE PRODUCT İŞLEMLERİ
const getOneProduct = async (req, res) => {
  try {
    // Token kontrolü
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Yetkilendirme başarısız. Token bulunamadı." });
    }

    // Token doğrulama
    const decodedToken = jwt.verify(token, "jwtSecretKey123456789");
    const userId = decodedToken.userId;

    // Kullanıcı kontrolü
    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(401)
        .json({ error: "Yetkilendirme başarısız. Kullanıcı bulunamadı." });
    }
    const findOneProduct = await Product.findByPk(2);

    // Başarılı bir şekilde eklendiyse, istemciye başarı mesajı gönderin
    res.status(201).json(findOneProduct);
  } catch (error) {
    // Hata oluştuğunda istemciye hata mesajını gönderin
    console.error("Ürün eklenirken bir hata oluştu:", error.message);
    res.status(500).json({ error: "Ürün eklenirken bir hata oluştu" });
  }
};
//! DELETEONE PRODUCT İŞLEMLERİ
/*const deleteProduct = () => {
switch (key) {
  case value:
    
    break;

  default:
    break;
}

};
*/

module.exports = {
  createProduct,
  getOneProduct,
};
