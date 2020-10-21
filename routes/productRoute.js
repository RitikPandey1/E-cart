const express = require("express");
const {
  getProducts,
  uploadData,
  addProductDetails,
  addProductImg,
  getProductImg,
} = require("../controller/Product");
const { protectFirewall } = require("../controller/UserAuth");
const { checkProduct , addToCart, removeFromCart,getCart} = require("../controller/Cart");

const router = express.Router();

router.get("/:category", getProducts);
router.post("/addProduct", uploadData, addProductDetails, addProductImg);
router.get("/product_image/:id/:image", getProductImg);

router.use(protectFirewall);
router.get("/user/:uid/product/:pid/addtocart",checkProduct,addToCart);
router.get("/cart/item/:id/remove", removeFromCart);
router.get("/cartlist/user/:id", getCart);

module.exports = router;
