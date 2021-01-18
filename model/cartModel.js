const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required:true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    default: 1,
    required: true,
  }
});

cartSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "email",
  }).populate({
     path: "product",
   });
  next();
});

const Cart = new mongoose.model("Cart", cartSchema);

module.exports = Cart;
