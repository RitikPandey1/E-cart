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
  images: Array ,
  averageRating: Number,
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

productSchema.index({ name: 'text', category: 'text' });

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
