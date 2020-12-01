import React from 'react';
import { Avatar, Typography, Divider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

export default ({ productReviews, classes }) => {
	let reviews;
	if (productReviews.length) {
		reviews = productReviews.map((review, i) => (
			<div className={classes.review} key={i}>
				<Avatar className={classes.avatar}> {review.user.name[0]} </Avatar>
				<Typography variant='subtitle1'>{review.user.name}</Typography>
				<Typography variant='caption'> {review.review} </Typography>
				<Rating
					name='half-rating'
					defaultValue={review.rating}
					precision={0.5}
					size='small'
					readOnly
				/>
				<Divider />
			</div>
		));
	} else {
		reviews = <Typography variant='subtitle1'>Not Available</Typography>;
	}

	return reviews;
};
