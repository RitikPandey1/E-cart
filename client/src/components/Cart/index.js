import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';
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

function Cart({ products, noOfItems, totalPrice, dispatch, history }) {
	const classes = useStyles();

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

	return noOfItems === 0 ? (
		<EmptyCart />
	) : (
		<div className={classes.root}>
			<Toolbar />
			<Grid container spacing={3}>
				<Grid item xs={12} md={8}>
					<div className={classes.items}>
						<h2>My cart ({noOfItems})</h2>
						{products.map((product) => (
							<Grid container className={classes.cartProduct}>
								<Grid item xs={12} sm={4} className={classes.imgBox}>
									<img
										src={`/api/v1/ecartproducts/product_image/${product._id}/${product.images[0]}`}
										alt='product'
										style={{ maxWidth: '100%', height: '100%' }}
									/>
								</Grid>
								<Grid item xs={12} sm={8} className={classes.info}>
									<ButtonBase
										onClick={() => history.push(`/product/${product._id}`)}
									>
										<Typography className={classes.name}>
											{product.name}
										</Typography>
									</ButtonBase>

									<Typography className={classes.price}>
										&#8377;{product.totalPrice.toLocaleString()}
									</Typography>
									<div className={classes.cartOptn}>
										<div className={classes.qty}>
											<p>QTY </p>

											<Button
												variant='contained'
												color='primary'
												className={classes.qtyBtn}
												onClick={() => dispatch(decQty(product._id))}
											>
												-
											</Button>
											<div className={classes.prdQty}>{product.qty}</div>
											<Button
												variant='contained'
												color='primary'
												className={classes.qtyBtn}
												onClick={() => dispatch(incQty(product._id))}
											>
												+
											</Button>
										</div>
										<IconButton
											color='primary'
											onClick={() => dispatch(removeItem(product._id))}
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
								<Typography variant='subtitle1'> Delivery Charges </Typography>
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
	);
}

export default connect(({ cart }) => ({
	products: cart.products,
	noOfItems: cart.noOfItems,
	totalPrice: cart.totalPrice,
}))(Cart);
