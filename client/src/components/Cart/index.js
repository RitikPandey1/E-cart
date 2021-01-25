import React, { useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';
import Spinner from '../spinner/Spinner';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import {
	Toolbar,
	Typography,
	IconButton,
	Container,
	Button,
	ButtonBase,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { decQty, incQty, removeItem } from '../../redux/Actions/cartActions';
import LoadingButton from '../LoadingButton';

const stripePromise = loadStripe(
	'pk_test_51HoAvtGaNOaCdqY8zStX6zrmS85OqUYM8kbJEQypYe9mO57w4RKuOkIUFPeCQb6hXNsBCyjVxInCU7bEEj0Fqlnu00D3595kX7'
);

function Cart({
	cart,
	noOfItems,
	totalPrice,
	dispatch,
	history,
	login,
	loading,
	token,
	location,
}) {
	const classes = useStyles(loading);
	const [loadingPayment, setLoadingPayment] = useState(false);
	const checkoutPage = async (event) => {
		if (login) {
			const stripe = await stripePromise;
			setLoadingPayment(true);
			const response = await axios.post(
				'/api/v1/ecartproducts/create-checkout-session/cart',
				{ products: cart },
				{ headers: { Authorization: 'Bearer '.concat(token) } }
			);
			setLoadingPayment(false);
			const session = response.data;

			const result = await stripe.redirectToCheckout({
				sessionId: session.id,
			});
			if (result.error) {
				history.push('/error');
			}
		} else history.push({ pathname: '/login', state: { from: location } });
	};
	const EmptyCart = () => (
		<Container className={classes.main}>
			<Typography variant='h6'>Your Cart is Empty !</Typography>
			<div className={classes.emptyCart}>
				<img
					src='../resources/emptyCart.png'
					alt='empty'
					style={{ width: '100%', height: '100%' }}
				/>
			</div>
		</Container>
	);
	if (!login) {
		return (
			<Container className={classes.main}>
				<Typography variant='h6'>Login to access your cart</Typography>
				<Button
					variant='contained'
					color='primary'
					onClick={() =>
						history.push({ pathname: '/user/login', state: { from: location } })
					}
				>
					login{' '}
				</Button>
			</Container>
		);
	}
	return (
		<>
			{' '}
			<div className={classes.spinner}>
				{' '}
				<Spinner />{' '}
			</div>
			<div className={classes.disable}> </div>
			{noOfItems === 0 ? (
				<EmptyCart />
			) : (
				<div className={classes.root}>
					<Toolbar />
					<Grid container spacing={3}>
						<Grid item xs={12} md={8}>
							<div className={classes.items}>
								<h2>My cart ({noOfItems})</h2>
								{cart.map((item) => (
									<Grid container className={classes.cartProduct}>
										<Grid item xs={12} sm={4} className={classes.imgBox}>
											<img
												src={`/api/v1/ecartproducts/product_image/${item.product._id}/${item.product.images[0]}`}
												alt='product'
												style={{ maxWidth: '100%', height: '100%' }}
											/>
										</Grid>
										<Grid item xs={12} sm={8} className={classes.info}>
											<ButtonBase
												onClick={() =>
													history.push(`/product/${item.product._id}`)
												}
											>
												<Typography className={classes.name}>
													{item.product.name}
												</Typography>
											</ButtonBase>

											<Typography className={classes.price}>
												&#8377;{item.totalPrice.toLocaleString()}
											</Typography>
											<div className={classes.cartOptn}>
												<div className={classes.qty}>
													<p>QTY </p>

													<Button
														variant='contained'
														color='primary'
														className={classes.qtyBtn}
														onClick={() =>
															item.qty != 1 && dispatch(decQty(item._id, token))
														}
													>
														-
													</Button>
													<div className={classes.prdQty}>{item.qty}</div>
													<Button
														variant='contained'
														color='primary'
														className={classes.qtyBtn}
														onClick={() => dispatch(incQty(item._id, token))}
													>
														+
													</Button>
												</div>
												<IconButton
													color='primary'
													onClick={() => dispatch(removeItem(item._id, token))}
												>
													<DeleteIcon />
												</IconButton>
											</div>
										</Grid>
									</Grid>
								))}
							</div>
						</Grid>
						<Grid item xs={12} md={4}>
							<div className={classes.items}>
								{' '}
								<Typography variant='h5'>Price details </Typography>
								<hr />
								<Grid container spacing={3} className={classes.priceDtl}>
									<Grid item xs={6} className={classes.priceItems}>
										<Typography variant='subtitle1'>
											Price ({noOfItems} {noOfItems > 1 ? 'items' : 'item'}){' '}
										</Typography>
									</Grid>
									<Grid item xs={6} className={classes.priceItems}>
										<Typography variant='subtitle1'>
											{' '}
											&#8377;{totalPrice.toLocaleString()}{' '}
										</Typography>
									</Grid>
									<Grid item xs={6} className={classes.priceItems}>
										<Typography variant='subtitle1'>
											{' '}
											Delivery Charges{' '}
										</Typography>
									</Grid>
									<Grid item xs={6} className={classes.priceItems}>
										<Typography variant='subtitle1'>Free</Typography>
									</Grid>
									<Grid item xs={6} className={classes.priceItems}>
										<Typography variant='h6'>Total Amount </Typography>
									</Grid>
									<Grid item xs={6} className={classes.priceItems}>
										<Typography variant='h6'>
											{' '}
											&#8377;{totalPrice.toLocaleString()}{' '}
										</Typography>
									</Grid>
									<Grid item xs={12} className={classes.priceItems}>
										{loadingPayment ? (
											<LoadingButton
												text='place order'
												variant='contained'
												color='primary'
												className={classes.orderBtn}
											/>
										) : (
											<Button
												variant='contained'
												color='primary'
												className={classes.orderBtn}
												onClick={checkoutPage}
											>
												Place Order
											</Button>
										)}
									</Grid>
								</Grid>
							</div>
						</Grid>
					</Grid>
				</div>
			)}
		</>
	);
}

export default connect(({ cart, auth }) => ({
	cart: cart.cart,
	noOfItems: cart.noOfItems,
	totalPrice: cart.totalPrice,
	login: auth.isAuth,
	token: auth.token,
	loading: cart.loading,
}))(Cart);
