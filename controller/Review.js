const Product = require('../model/productModel');
const Review = require('../model/reviewModel');
const Order = require('../model/orderModel');
const AppError = require('../utils/appError');
const catchError = require('../utils/catchError');

const getAvgRating = (ratings) => {
	if(ratings.length){
	const totalRatings = ratings.reduce((sum, rating) => sum + rating, 0);
	let avgRating = (totalRatings / ratings.length).toFixed(1);
	if (avgRating > 1.0 && avgRating < 1.5) avgRating = 1.5;
	else if (avgRating > 1.5 && avgRating <= 2.0) avgRating = 2.0;
	else if (avgRating > 2.0 && avgRating <= 2.5) avgRating = 2.5;
	else if (avgRating > 2.5 && avgRating <= 3.0) avgRating = 3.0;
	else if (avgRating > 3.0 && avgRating <= 3.5) avgRating = 3.5;
	else if (avgRating > 3.5 && avgRating <= 4.0) avgRating = 4.0;
	else if (avgRating > 4.0 && avgRating <= 4.5) avgRating = 4.5;
	else if (avgRating > 4.5 && avgRating <= 5.0) avgRating = 5.0;
		return avgRating;
	}
	return 0;
};



exports.insertRating = catchError(async (req, res, next) => {
	const reviews = await Review.find({ product: req.body.product });
	const ratings = reviews.map((elem) => elem.rating);
	const averageRating = getAvgRating(ratings);
	const product = await Product.findById(req.body.product);
	product.averageRating = averageRating;
	product.totalReviews = reviews.length;
	await product.save();

	res.status(201).json({
		status: 'Success',
		message: ' review submitted',
	});
});

exports.addReview = catchError(async (req, res, next) => {
	const { description, rating, orderId , product } = req.body;
    const review = 	await Review.create({
		description,
		rating,
		user: req.user._id,
        product
	});
	const order = await Order.findById(orderId);
	console.log(order);
	order.review = review._id;
	await order.save();
	next();
});

exports.getReviews = catchError(async (req, res, next) => {
	const { id } = req.params;
	const reviews = await Review.find({ product: id }).select('-_id');
	res.status(200).json({ status: 'Success', data: reviews });
});
