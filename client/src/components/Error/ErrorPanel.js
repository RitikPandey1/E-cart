import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

export default ({ error, message }) => {
	if (error)
		return (
			<Alert severity='error'>
				<AlertTitle>{message}</AlertTitle>
			</Alert>
		);

	return null;
};
