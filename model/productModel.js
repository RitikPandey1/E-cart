const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name *required*"],
  },
  price: {
    type: Number,
    required: [true, "Price *required*"],
  },
  images: { type: Array },
  rating: {
    type: Number,
    min: [1, "Rating must be equal to 1 or greater"],
    max: [5, "Rating must be equal to 5 or lesser"],
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: [true, "Product category *required*"],
  },
  totalReviews: {
    type: Number,
    default: 0,
  },
});

const Product = new mongoose.model("product", productSchema);

module.exports = Product;
