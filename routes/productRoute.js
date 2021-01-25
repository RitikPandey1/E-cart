const express = require('express');
const {
	getProducts,
	uploadData,
	addProductDetails,
	addProductImg,
	getProductImg,
	product,
} = require('../controller/Product');
const { protectFirewall } = require('../controller/UserAuth');
const {
	checkProduct,
	addToCart,
	removeFromCart,
	getCart,
	updateQty,
} = require('../controller/Cart');
const { createCheckoutSession } = require('../controller/Order');

const {
	addReview,
	getReviews,
	insertRating,
	checkDuplicate,
} = require('../controller/Review');
const router = express.Router();

router.get('/category/:category', getProducts);
router.get('/product_image/:id/:image', getProductImg);
router.get('/product/:id/reviews', getReviews);
router.get('/product/:id', product);

router.use(protectFirewall);
router.post('/add/Product', uploadData, addProductDetails, addProductImg);
router.get('/product/:pid/addtocart', checkProduct, addToCart);
router.delete('/cart/item/:id/remove', removeFromCart);
router.get('/cart', getCart);
router.get('/cart/updateqty/:id/:op', updateQty);
router.post('/create-checkout-session/:cart?', createCheckoutSession);

//--product review routes
router.post('/add/review', checkDuplicate, insertRating, addReview);

module.exports = router;
