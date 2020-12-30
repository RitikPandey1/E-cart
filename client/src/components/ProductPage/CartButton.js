import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/Actions/cartActions';

function CartButton({ classes, product, dispatch }) {
	return (
		<Button
			variant='contained'
			color='primary'
			size='large'
			className={classes.button}
			onClick={() => dispatch(addItem(product))}
		>
			Add To Cart
		</Button>
	);
}

export default connect()(CartButton);
