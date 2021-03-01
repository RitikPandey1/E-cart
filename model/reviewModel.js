const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
	description: {
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
	product: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	}
});

reviewSchema.pre(/^find/, function (next) {
	this.populate('user');
	next();
});

const Review = new mongoose.model('Review', reviewSchema);

module.exports = Review;
