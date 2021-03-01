const Cart = require('../model/cartModel');
const Product = require('../model/productModel');
const AppError = require('../utils/appError');
const catchError = require('../utils/catchError');

const getCart = (userId) => Cart.find({ user: userId }).select('-user');

exports.checkProduct = catchError(async (req, res, next) => {
	const { pid } = req.params;
	const product = await Cart.findOne({
		$and: [{ user: req.user._id }, { product: pid }],
	});
	console.log(product);
	if (product) {
		return res
			.status(400)
			.json({ status: 'fail', message: 'Product is already in cart' });
	}
	next();
});

exports.addToCart = catchError(async (req, res, next) => {
	const { pid } = req.params;
	const product = await Product.findById(pid);

	await Cart.create({
		user: req.user._id,
		product: pid,
		totalPrice: product.price,
	});
	const newCart = await getCart(req.user._id);
	res.status(201).json({
		status: 'Success',
		message: 'product added to cart',
		data: newCart,
	});
});

exports.getCart = catchError(async (req, res, next) => {
	const cartList = await getCart(req.user._id);
	res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
	res.set('Expires', '0');
	res.set('Pragma', 'no-cache');
	res.status('200').json({ status: 'Success', data: cartList });
});

exports.removeFromCart = catchError(async (req, res, next) => {
	const item = await Cart.findByIdAndDelete(req.params.id);
	const newCart = await getCart(req.user._id);

	res.status(200).json({
		status: 'Success',
		message: 'product removed form cart',
		data: newCart,
	});
});

exports.updateQty = catchError(async (req, res, next) => {
	const { id, op } = req.params;
	const item = await Cart.findById(id);
	if (op === 'inc') item.qty += 1;
	if (op === 'dec' && item.qty > 1) item.qty -= 1;
	item.totalPrice = item.product.price * item.qty;
	await item.save();
	const newCart = await getCart(req.user._id);
	return res
		.status(200)
		.json({ status: 'Success', message: 'quantity updated', data: newCart });
});

exports.emptyCart = async (id) => {
	console.log("in side del");
	try {
		await Cart.deleteMany({ user :id });
	} catch (error) {
		throw new Error(error);
	}
};
