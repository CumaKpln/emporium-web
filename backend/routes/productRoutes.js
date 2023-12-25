// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/product-post", productController.createProduct);
router.get("/product-getOneProduct", productController.getOneProduct);

module.exports = router;
