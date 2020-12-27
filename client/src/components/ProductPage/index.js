import {  Grid, Toolbar, Typography, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import GridLayout from '../GridLayout';
import useStyles from './style';
import { useParams } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import ProductInfo from './ProductInfo';
import ProductRating from './ProductRating';
import ProductReviews from './ProductReviews';
//import CartButton from './CartButton';
//import { loadStripe } from '@stripe/stripe-js';
//import LoadingButton from '../LoadingButton';
import { getProduct, getReviews } from '../../redux/Actions/productAction';
import { connect } from 'react-redux';
// const stripePromise = loadStripe(
// 	'pk_test_51HoAvtGaNOaCdqY8zStX6zrmS85OqUYM8kbJEQypYe9mO57w4RKuOkIUFPeCQb6hXNsBCyjVxInCU7bEEj0Fqlnu00D3595kX7'
// );

const ProductPage = ({ history, location, loading, product,reviews, dispatch }) => {
	const classes = useStyles();

	const { id } = useParams();

	useEffect(() => {
		dispatch(getProduct(id));
		dispatch(getReviews(id));
	},[id]);

	// const checkoutPage = async (event) => {
	// 	if (isAuth.isLogin) {
	// 		const stripe = await stripePromise;
	// 		setLoading(true);
	// 		const products = [
	// 			{
	// 				name: product.data.name,
	// 				price: product.data.price,
	// 				quantity: 1,
	// 			},
	// 		];
	// 		const response = await axios.post(
	// 			'/api/v1/ecartproducts/create-checkout-session',
	// 			{ products },
	// 			{ headers: { Authorization: 'Bearer '.concat(isAuth.token) } }
	// 		);
	// 		setLoading(false);
	// 		const session = response.data;

	// 		const result = await stripe.redirectToCheckout({
	// 			sessionId: session.id,
	// 		});
	// 		if (result.error) {
	// 			history.push('/error');
	// 		}
	// 	} else history.push({ pathname: '/login', state: { from: location } });
	// };

	return (
		<GridLayout>
			{loading ? (
				<Spinner />
			) : (
				<Grid container direction='column'>
					<ProductInfo product={product} classes={classes} />
					<Grid container item>
						<Grid item xs={12} sm={6} className={classes.buttonArea}>
							{/* {loading ? (
								<LoadingButton text='Buy Now' className={classes.button} />
							) : (
								<Button
									variant='contained'
									color='primary'
									size='large'
									className={classes.button}
									//onClick={checkoutPage}
								>
									Buy Now
								</Button>
							)} */}
						</Grid>
						<Grid item xs={12} sm={6} className={classes.buttonArea}>
							{/* <CartButton
								addToCart={addToCart}
								inCart={product.inCart || inCart}
								classes={classes}
								history={history}
								location={location}
							/> */}
						</Grid>
					</Grid>
					<Grid item>
						<Toolbar />
						<ProductRating rating={product.averageRating} />
					</Grid>
					<Grid item>
						<Toolbar />
						<Paper className={classes.paper}>
							<Typography variant='h4'>Reviews</Typography>
							<ProductReviews productReviews={reviews} classes={classes} />
						</Paper>
					</Grid>
				</Grid>
			)}
		</GridLayout>
	);
};

export default connect(({getProduct}) => ({
	product: getProduct.product,
	reviews: getProduct.reviews,
	loading: getProduct.loading,
}))(ProductPage);
