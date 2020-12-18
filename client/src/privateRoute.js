import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { store } from './globalStore';

const PrivateRoute = ({ children, ...rest }) => {
	const { state } = useContext(store);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				state.isLogin ? (
					children
				) : (
					<Redirect to={{ pathname: '/login', state: { from: location } }} />
				)
			}
		/>
	);
};

export default PrivateRoute;
