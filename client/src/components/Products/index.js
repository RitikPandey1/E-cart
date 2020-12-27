import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import StarIcon from '@material-ui/icons/Star';
import { getProducts } from '../../redux/Actions/productAction';
import {
	Typography,
	ButtonBase,
	Chip,
} from '@material-ui/core';

import Spinner from '../spinner/Spinner';
import GridLayout from '../GridLayout';
import useStyles from './style';

const Products = ({ history, loading, category, products, dispatch }) => {
	const classes = useStyles();
	const { name } = useParams();
	useEffect(() => {
		dispatch(getProducts(name));
	}, [name]);

	return (
		<GridLayout>
			<div style={{ overflow: 'hidden' }}>
				{loading ? (
					<Spinner />
				) : (
					<>
						{' '}
						<Typography variant='h4' className={classes.mainHeading}>
							Category / {category.toUpperCase()}
						</Typography>
						{products.map((product, i) => (
							<Grid container key={i} className={classes.flexBox1}>
								<Grid item xs={12} sm={4} className={classes.box}>
									<img
										src={`/api/v1/ecartproducts/product_image/${product._id}/${product.images[0]}`}
										alt='product'
										style={{ maxWidth: '100%', height: '100%' }}
									/>
								</Grid>
								<Grid item xs={12} sm={8} className={classes.box2}>
									<ButtonBase
										onClick={() => history.push(`/product/${product._id}`)}
									>
										<Typography className={classes.productName}>
											{' '}
											{product.name}
										</Typography>
									</ButtonBase>
									{product.averageRating && (
										<Chip
											size='small'
											style={{ backgroundColor: '#27ae60', color: '#fff' }}
											label={product.averageRating}
											icon={<StarIcon style={{ color: '#fff' }} />}
										/>
									)}

									<Typography className={classes.productPrice}>
										&#8377;{product.price.toLocaleString()}
									</Typography>
								</Grid>
							</Grid>
						))}
					</>
				)}
			</div>
		</GridLayout>
	);
};

export default connect(({ getProducts }) => ({
	loading: getProducts.loading,
	category: getProducts.category,
	products: getProducts.products,
}))(Products);
