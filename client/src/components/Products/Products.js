import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import {
	Typography,
	ButtonBase,
	Chip,
	Button,
	TextField,
	IconButton,
} from '@material-ui/core';
import Spinner from '../spinner/Spinner';
import MainGridLayout from './MainGridLayout';
import { useGetHook } from '../../customHook';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "./style";


const Products = ({ history }) => {
	const classes = useStyles();
	const { category } = useParams();
	const url = `/api/v1/ecartproducts/category/${category}`;
	const [result, loading, error] = useGetHook(url);

	if (error) history.push('/error');

	return (
		<MainGridLayout>
			<div style={{ overflow: 'hidden' }}>
				{loading ? (
					<Spinner />
				) : (
					<>
						{' '}
						<div className={classes.searchBox}>
							<TextField
								className={classes.srearchField}
								label='Search'
								variant='outlined'
								size='small'
							/>
							<Button
								className={classes.srcbtn}
								variant='contained'
								color='primary'
								size='small'
							>
								<SearchIcon />
							</Button>
						</div>
						<Typography variant='h4' className={classes.mainHeading}>
							{category}
						</Typography>
						{result.data.map((product, i) => (
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
		</MainGridLayout>
	);
};
export default Products;
