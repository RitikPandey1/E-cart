import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import routes from './routes';
import { connect } from 'react-redux';
import { loadCart } from './redux/Actions/cartActions';

function App({ token, dispatch }) {
	useEffect(() => {
		dispatch(loadCart(token));
	});
	return (
		<React.Fragment>
			<Router>
				<Header />
				<Switch>
					{routes.map((route, i) => (
						<Route
							exact={route.exact}
							key={i}
							path={route.path}
							component={route.component}
						/>
					))}
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default connect(({ auth }) => ({
	token: auth.token,
}))(App);
