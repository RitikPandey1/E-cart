const Product = require("../model/productModel");
const Review = require("../model/reviewModel");
const AppError = require("../utils/AppError");
const catchError = require("../utils/catchError");

const getAvgRating = (ratings) => {
  const totalRatings = ratings.reduce((sum, rating) => sum + rating, 0);
  const avgRating = (totalRatings / ratings.length).toFixed(1);
  return avgRating;
};

exports.checkDuplicate = catchError(async (req, res, next) => {
  const review = await Review.find({
    $and: [{ user: req.user._id }, { product: req.body.product }],
  });
  if(review.length!==0) return next(new AppError("Fail","review already submitted",400))
  next();
});

exports.insertRating = catchError(async (req, res, next) => {
  const reviews = await Review.find({ product: req.body.product });
  const ratings = reviews.map((elem) => elem.rating);
  const averageRating = getAvgRating(ratings);
  const product = await Product.findById(req.body.product);
  product.averageRating = averageRating;
  product.totalReviews = reviews.length;
  await product.save();
  next();
});

exports.addReview = catchError(async (req, res, next) => {
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
});


exports.getReviews = catchError(async (req, res, next) => {
  const { id } = req.params;
  const reviews = await Review.find({ product: id }).select("-_id");
  res.status(200).json({ status: "Success", data: reviews });
});
