import React, { useState } from "react";
import axios from "axios";
import  { Toaster } from "react-hot-toast";
import "../Styles/UploadProduct.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UploadProduct = () => {
  const token = localStorage.getItem("token");


  const [productTitle, setProductTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [images, setImages] = useState([]);
  const [squareMeters, setSquareMeters] = useState("");
  const [color, setColor] = useState("");
  const [series, setSeries] = useState("");
  const [gear, setGear] = useState("");
  const [ram, setRam] = useState("");
  const [processor, setProcessor] = useState("");
  const [memory, setMemory] = useState("");
  const [room, setRoom] = useState("");
  const [gpu, setGpu] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [model, setModel] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubCategory("");
  };

  const getSubCategories = () => {
    switch (category) {
      case "emlak":
        return (
          <>
            <option value="">Alt Kategori Seçiniz</option>
            <option value="land">Arsa</option>
            <option value="home">Ev</option>
          </>
        );
      case "vasıta":
        return (
          <>
            <option value="">Alt Kategori Seçiniz</option>
            <option value="car">Araba</option>
            <option value="motorcycle">Motorsiklet</option>
          </>
        );
      case "elektronik-esya":
        return (
          <>
            <option value="">Alt Kategori Seçiniz</option>
            <option value="computer">Bilgisayar</option>
            <option value="phone">Telefon</option>
          </>
        );
      default:
        return <option value="">Kategori Seçiniz</option>;
    }
  };

  const handleFileChange = (event) => {
    const selectedImages = event.target.files;
    setImages(selectedImages);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();

    data.append("productTitle", productTitle);
    data.append("description", description);
    data.append("category", category);
    data.append("subcategory", subcategory);
    data.append("productName", productName);
    data.append("price", price);
    data.append("brand", brand);
    data.append("model", model);
    data.append("squareMeters", squareMeters);
    data.append("color", color);
    data.append("series", series);
    data.append("gear", gear);
    data.append("ram", ram);
    data.append("processor", processor);
    data.append("memory", memory);
    data.append("room", room);
    data.append("gpu", gpu);
    data.append("province", province);
    data.append("district", district);
    data.append("neighbourhood", neighbourhood);
    data.append("propertyType", propertyType);

    // Multiple files
    for (let i = 0; i < images.length; i++) {
      data.append("images", images[i]);
    }

    const headers = {
      "Cache-Control": "no-cache",
      Authorization: `Bearer ${token}`,
    };

    const formDataConfig = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://mysql-emporium-deploy1.onrender.com/product/product-post", // localhost'un başına "http://" ekledim
      headers: headers,
      data: data,
    };

    axios
      .request(formDataConfig)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container product-update mt-5 mb-5">
        <div className="row">
          <div className="col-md-4 col-sm-2 col-1"></div>
          <div className="col-md-4 col-sm-8 col-10">
            <Toaster />
            <form>
              <div className="product-foto">
                <input
                  name="images"
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  accept="image/"
                  width="100"
                  height="auto"
                  multiple
                />
              </div>

              <div className="product-name">
                <label htmlFor="productName">Ürün Adı:</label>
                <input
                  name="productName"
                  type="text"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
              <div className="product-title">
                <label htmlFor="title">Ürün Başlığı:</label>
                <input
                  name="productTitle"
                  type="text"
                  id="title"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  required
                />
              </div>
              <div className="product-desc">
                <label htmlFor="description">Ürün Açıklaması:</label>
                <textarea
                  name="description"
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="product-pro">
                <label htmlFor="province">İl:</label>
                <input
                  name="province"
                  type="text"
                  id="province"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  required
                />
              </div>
              <div className="product-dist">
                <label htmlFor="district">İlçe:</label>
                <input
                  name="district"
                  type="text"
                  id="district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                />
              </div>
              <div className="product-neigbor">
                <label htmlFor="neigborhood">Mahalle:</label>
                <input
                  name="neighbourhood"
                  type="text"
                  id="neigborhood"
                  value={neighbourhood}
                  onChange={(e) => setNeighbourhood(e.target.value)}
                  required
                />
              </div>
              <div className="product-price">
                <label htmlFor="price">Fiyat:</label>
                <input
                  name="price"
                  type="text"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="product-category">
                <label htmlFor="category">Kategori:</label>
                <select
                  name="category"
                  id="category"
                  value={category}
                  onChange={handleCategoryChange}
                  required
                >
                  <option value="">Kategori Seçiniz</option>
                  <option value="emlak">Emlak</option>
                  <option value="vasıta">Vasıta</option>
                  <option value="elektronik-esya">Elektronik Eşya</option>
                </select>
              </div>
              {category && (
                <div className="product-subCategory">
                  <label htmlFor="subCategory">Alt Kategori:</label>
                  <select
                    name="subcategory"
                    id="subCategory"
                    value={subcategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    required
                  >
                    {getSubCategories()}
                  </select>
                </div>
              )}
              {category === "emlak" && (
                <>
                  <div className="product-squareMeters">
                    <label htmlFor="squareMeters">{subcategory} m2'si:</label>
                    <input
                      name="squareMeters"
                      type="number"
                      id="squareMeters"
                      value={squareMeters}
                      onChange={(e) => setSquareMeters(e.target.value)}
                      required
                    />
                  </div>
                  <div className="product-propertyType">
                    <label htmlFor="propertyType">Emlak Tipi 1 :</label>
                    <select
                      type="text"
                      name="propertyType"
                      id="propertyType"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      required
                    >
                      <option value="">Emlak Tipi Seçiniz</option>
                      <option value="Kiralık">Kiralık</option>
                      <option value="Satılık">Satılık</option>
                    </select>
                  </div>
                </>
              )}
              {subcategory === "home" && (
                <div className="product-productRoom">
                  <label htmlFor="productRoom">Oda Sayısını Seçiniz:</label>
                  <select
                    name="room"
                    type="number"
                    id="productRoom"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    required
                  >
                    <option value="">Oda Sayısını Seçiniz</option>
                    <option value="emlak">2+1</option>
                    <option value="vasıta">3+1</option>
                  </select>
                </div>
              )}
              {(category === "vasıta" || category === "elektronik-esya") && (
                <div>
                  <div className="product-brand">
                    <label htmlFor="brand">Markası:</label>
                    <br />
                    <input
                      name="brand"
                      type="text"
                      id="brand"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      required
                    />
                  </div>
                  <div className="product-color">
                    <label htmlFor="color"> Renk:</label>
                    <br />
                    <input
                      name="color"
                      type="text"
                      id="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      required
                    />
                  </div>
                  <div className="product-serie">
                    <label htmlFor="series"> Model:</label>
                    <br />
                    <input
                      name="series"
                      type="text"
                      id="series"
                      value={series}
                      onChange={(e) => setSeries(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}
              {category === "vasıta" && (
                <div className="product-gear">
                  <label htmlFor="gear">Vites:</label>
                  <br />
                  <input
                    name="gear"
                    type="text"
                    id="gear"
                    value={gear}
                    onChange={(e) => setGear(e.target.value)}
                    required
                  />
                </div>
              )}
              {category === "elektronik-esya" && (
                <div>
                  <div className="product-ram">
                    <label htmlFor="ram">Ram Bellek :</label>
                    <br />
                    <input
                      name="ram"
                      type="number"
                      id="ram"
                      value={ram}
                      onChange={(e) => setRam(e.target.value)}
                      required
                    />
                  </div>
                  <div className="product-processor">
                    <label htmlFor="processor">İşlemci:</label>
                    <input
                      name="ram"
                      type="text"
                      id="processor"
                      value={processor}
                      onChange={(e) => setProcessor(e.target.value)}
                      required
                    />
                  </div>
                  <div className="product-serie">
                    <label htmlFor="model"> Model:</label>
                    <br />
                    <input
                      name="model"
                      type="text"
                      id="model"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}
              {subcategory === "computer" && (
                <div>
                  <div className="product-memory">
                    <label htmlFor="memory">Hafıza:</label>
                    <input
                      name="memory"
                      type="number"
                      id="memory"
                      value={memory}
                      onChange={(e) => setMemory(e.target.value)}
                      required
                    />
                  </div>
                  <div className="product-graphicCard">
                    <label htmlFor="graphicCard">Ekran kartı:</label>
                    <input
                      name="gpu"
                      type="text"
                      id="graphicCard"
                      value={gpu}
                      onChange={(e) => setGpu(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}
              <button
                onClick={handleSubmit}
                className="submitBtn float-end"
                type="submit"
              >
                Ürünü Yükle
              </button>
            </form>
          </div>
          <div className="col-md-4 col-sm-2 col-1"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UploadProduct;
