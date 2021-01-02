import React from 'react';
import { Grid, Toolbar, Typography } from '@material-ui/core';

export default ({ product, classes }) => {
	if (product)
		return (
			<>
				{' '}
				<Grid item>
					<Toolbar />
					<Typography  className={classes.name}>{product.name}</Typography> <Toolbar />
				</Grid>
				<Grid item className={classes.imageBox}>
					<img
						src={`/api/v1/ecartproducts/product_image/${product._id}/${product.images[1]}`}
						alt='product'
						style={{ maxWidth: '100%' }}
					/>
				</Grid>
				<Grid item>
					<Toolbar />{' '}
					<Typography  className={classes.price}>
						{' '}
						&#8377; {product.price.toLocaleString()}{' '}
					</Typography>
				</Grid>
				<Grid item>
					<Toolbar>
						<Typography className={classes.description}>{product.description}</Typography>
					</Toolbar>
				</Grid>{' '}
			</>
		);

	return null;
};
