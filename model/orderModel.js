const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	product: {
		type: mongoose.Schema.ObjectId,
		ref: 'Product',
		required: true,
	},
	user: {
		type: String,
		required: true,
	},
	unitPrice: { type: Number, required: true },
	qty: { type: Number, required: true },
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

const Order = new mongoose.model('Order', orderSchema);

module.exports = Order;
