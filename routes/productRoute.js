const express = require("express");
const {
  getProducts,
  uploadData,
  addProductDetails,
  addProductImg,
  getProductImg,
} = require("../controller/Product");

const router = express.Router();

router.get("/:category", getProducts);
router.post("/addProduct", uploadData, addProductDetails, addProductImg);
router.get("/product_image/:id/:image", getProductImg);
module.exports = router;
