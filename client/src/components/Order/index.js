import React, { useEffect } from 'react';
import {
	Grid,
	Typography,
	Container,
	Button,
	ButtonBase,
} from '@material-ui/core';
import useStyles from './style';
import Spinner from '../spinner/Spinner';
import GridLayout from '../GridLayout/index';
import { connect } from 'react-redux';
import { getOrders } from '../../redux/Actions/productAction';

function Order({ token, loading, orders, dispatch }) {
	useEffect(() => {
		dispatch(getOrders(token));
	}, []);

	return (
		<GridLayout>
			{loading ? (
				<Spinner />
			) : (
				<Container>
					<h1>My orders</h1>
					<Grid container>
						<Grid item xs={12} sm={4}>
							{' '}
						</Grid>
						<Grid item xs={12} sm={4}>
							{' '}
						</Grid>
						<Grid item xs={12} sm={4}>
							{' '}
						</Grid>
					</Grid>
				</Container>
			)}
		</GridLayout>
	);
}

export default connect(({ auth, orders }) => ({
	token: auth.token,
	loading: orders.loading,
	orders: orders.data,
}))(Order);
