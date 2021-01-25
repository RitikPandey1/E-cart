import React from 'react';
import Button from '@material-ui/core/Button';
import { addItem } from '../../redux/Actions/cartActions';

function CartButton({
	classes,
	product,
	dispatch,
	inCart,
	token,
	history,
	location,
}) {
	const handleClick = () => {
		if (!token) {
			history.push({ pathname: '/user/login', state: { from: location } });
			return;
		}
		dispatch(addItem(product._id, token));
	};

	return inCart ? (
		<Button
			variant='contained'
			color='primary'
			size='large'
			className={classes.button}
			disabled
		>
			In Cart
		</Button>
	) : (
		<Button
			variant='contained'
			color='primary'
			size='large'
			className={classes.button}
			onClick={handleClick}
		>
			Add To Cart
		</Button>
	);
}

export default CartButton;
