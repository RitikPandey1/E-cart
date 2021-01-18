import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';
import Spinner from '../spinner/Spinner';
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

function Cart({
	cart,
	noOfItems,
	totalPrice,
	dispatch,
	history,
	login,
	loading,
	token,
}) {
	const classes = useStyles(loading);

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
				<Typography variant='h6'>Can't access cart !</Typography>
				<Typography variant='subtitle1'>Login to your account</Typography>
				<Button
					variant='contained'
					color='primary'
					onClick={() => history.push('/user/login')}
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
														onClick={() => dispatch(decQty(item._id, token))}
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
										<Button
											variant='contained'
											color='primary'
											className={classes.orderBtn}
										>
											Place Order
										</Button>
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
