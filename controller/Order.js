const catchError = require('../utils/catchError');
const Order = require('../model/orderModel');
const stripe = require('stripe')(
	'sk_test_51HoAvtGaNOaCdqY8oM36c2Y60g1ovUTQvke5tZL8EZAcy1eSZZy4gA7NbybgtwsvMxfkpaEpwGcRzmKzQULjSzGC00VRsL3xDv'
);
const orderProduct = (productList, cart) => {
	let line_items, data;
	if (cart) {
		line_items = productList.map((item) => ({
			price_data: {
				currency: 'inr',
				product_data: {
					name: item.product.name,
				},
				unit_amount: item.product.price * 100,
			},
			quantity: item.qty,
		}));

		data = productList.map((item) => ({
			product: item.product._id,
			qty: item.qty,
			unitPrice: item.product.price,
		}));

		return { line_items, data };
	}

	line_items = productList.map((item) => ({
		price_data: {
			currency: 'inr',
			product_data: {
				name: item.name,
			},
			unit_amount: item.price * 100,
		},
		quantity: item.qty,
	}));

	data = productList.map((product) => ({
		product: product.id,
		qty: product.qty,
		unitPrice: product.price,
	}));

	return { line_items, data };
};

exports.createCheckoutSession = catchError(async (req, res, next) => {
	const { products } = req.body;
	const { cart } = req.params;

	const { line_items, data } = orderProduct(products, cart);
	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		customer_email: req.user.email,
		line_items,
		mode: 'payment',
		metadata: {
			fromCart: `${cart ? true : false}`,
			data: JSON.stringify(data),
		},
		success_url: 'http://127.0.0.1:3000',
		cancel_url: 'http://127.0.0.1/payment-fail',
	});

	res.json({
		id: session.id,
	});
});

const addOrder = async (session) => {
	const data = JSON.parse(session.metadata.data);
	const orders = data.map((item) => ({
		...item,
		user: session.customer_details.email,
	}));

	console.log(orders);
	console.log('-----------');
	try {
		const order = await Order.insertMany(orders);
		console.log(order);
	} catch (err) {
		throw new Error(err);
	}
};

exports.stripeWebhook = (req, res) => {
	const signature = req.headers['stripe-signature'];

	let event;
	try {
		event = stripe.webhooks.constructEvent(
			req.body,
			signature,
			process.env.webhookSecret
		);
	} catch (err) {
		res.status(400).send(`Stripe Error: ${err}`);
	}
	if (event.type === 'checkout.session.completed') addOrder(event.data.object);

	res.status(200).json({ recevied: true });
};
