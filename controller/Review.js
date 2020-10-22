const Review = require("../model/reviewModel");

exports.addReview = async (req, res, next) => {
  const { review, rating, product } = req.body;
  const response = await Review.create({
    review,
    rating,
    user: req.user._id,
    product,
  });
  res.status(201).json({
    status: "Success",
    message: " review submitted",
    data: response,
  });
};

exports.removeReview = async (req, res, next) => {
  const { id } = req.params;
  await Review.findByIdAndDelete(id);
  res.status(201).json({
    status: "Success",
    message: "review removed",
  });
};

exports.getReviews = async (req, res, next) => {
  const { id } = req.params;
  const reviews = await Review.find({ product: id }).select("-_id");
  res.status(200).json({ status: "Success", data: reviews });
};
