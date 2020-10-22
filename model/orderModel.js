const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  product: {
    type: mongoose.model.ObjectId,
    ref: "Product",
    required: true,
  },
  user: {
    type: mongoose.model.ObjectId,
    ref: "User",
    required: true,
  },
    price: { type: Number, required: true },
    createdAt: {
        type: Date,
        default:Date.now()
  }
});

const Order = new mongoose.model("Order", orderSchema);

module.exports = Order;

