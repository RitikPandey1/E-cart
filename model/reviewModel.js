const mongoose = require("mongoose");
const Product = require("./productModel");

const reviewSchema = mongoose.Schema({
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: [1, "rating equal to  1 or more"],
    max: [5, "rating  equal to 5 or less "],
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    require: true,
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true,
  },
});

reviewSchema.pre(/^find/, function (next) {
  this.populate({ path: "user", select: "name" });
  next();
});

const Review = new mongoose.model("Review", reviewSchema);

module.exports = Review;
