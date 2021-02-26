const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
	review: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		min: [1, 'rating equal to  1 or more'],
		max: [5, 'rating  equal to 5 or less '],
		required: true,
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	},
	order: {
		type: mongoose.Schema.ObjectId,
		ref: 'Order',
		required: true,
	},
});

reviewSchema.pre(/^find/, function (next) {
	this.populate({ path: 'order' });
	next();
});

const Review = new mongoose.model('Review', reviewSchema);

module.exports = Review;
