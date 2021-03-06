const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');
const errorHandler = require('./utils/errorHandler');
const { stripeWebhook } = require('./controller/Order');
const path = require('path');

const app = express();

dotenv.config({ path: './config.env' });


(async () => {
	const mongo = await mongoose.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	});
	console.log('-- Database connected --');
	exports.db = mongo.connection.db;
})();

app.post('/stripe-webhook', express.raw({ type: 'application/json' }), stripeWebhook);


app.use(express.json());

app.use('/api/v1/ecartproducts/', productRouter);
app.use('/api/v1/ecartusers/', userRouter);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.use(errorHandler);

app.listen(process.env.PORT, () =>
	console.log(`-- server running at PORT: ${process.env.PORT} --`)
);
