const Cart = require("../model/cartModel");
const Product = require("../model/productModel");
const AppError = require("../utils/AppError");
const catchError = require("../utils/catchError");

exports.checkProduct = catchError(async (req, res, next) => {
  const { pid } = req.params;
  const product = await Product.findById(pid);
  if (!product)
    return next(new AppError("Fail", "Product not found  on ecart", 404));
  next();
});

exports.getCart = catchError(async (req, res, next) => {
  const cartList = await Cart.find({ user: req.user._id });
  res
    .status("200")
    .json({ status: "Success", items: cartList.length, data: cartList });
});

exports.addToCart = catchError(async (req, res, next) => {
  const { pid } = req.params;

  await Cart.create({
    user: req.user._id,
    product: pid,
  })

  res.status(201).json({ status: "Success", message: "product added to cart" });
});

exports.removeFromCart = catchError(async (req, res, next) => {
  const item = await Cart.findByIdAndDelete(req.params.id);

  res
    .status(200)
    .json({ status: "Success", message: "product removed form cart" });
});
