// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");

router.post(
  "/product-post",
  productController.upload.array("images", 5),
  productController.createProduct,
  (req, res) => {
    res.send("Fotoğraflar yüklendi.");
  }
);

router.get("/product-getOneProduct", productController.getOneProduct);

module.exports = router;
