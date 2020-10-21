const Cart = require("../model/cartModel");
const Product = require("../model/productModel");

exports.checkProduct = async (req, res, next) => {
  const { pid } = req.params;
  const product = await Product.findById(pid);
  if (!product)
    return res
      .status(404)
      .json({ status: "Fail", message: "Product not found  on ecart" });
  next();
};

exports.getCart = async (req, res, next) => {
  const cartList = await Cart.find({ user: req.params.id });

  res
    .status("200")
    .json({ status: "Success", items: cartList.length, data: cartList });
};

exports.addToCart = async (req, res, next) => {
  const { pid, uid } = req.params;

  await Cart.create({
    user: uid,
    product: pid,
  });

  res.status(201).json({ status: "Success", message: "product added to cart" });
};

exports.removeFromCart = async (req, res, next) => {
  const item = await Cart.findByIdAndDelete(req.params.id);

  res
    .status(200)
    .json({ status: "Success", message: "product removed form cart" });
};
