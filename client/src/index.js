import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';

import LoginPage from './components/LoginPage';
import Products from './components/Products';
import SignInPage from './components/SignInPage';
import Header from './components/Header';
import PrdouctPage from './components/ProductPage/ProductPage';
import Cart from './components/Cart';
import Order from './components/Order';
import ErrorPage from './components/Error/ErrorPage';
import MainGridLayout from './components/MainGridLayout';
import Home from './components/Home';
import { StateProvider } from './globalStore';
import PrivateRoute from './privateRoute';
import './index.css';

const NotFound = () => (
	<MainGridLayout>
		<h1>404 Page Not found</h1>
	</MainGridLayout>
);

const App = () => {
	return (
		<StateProvider>
			<Router>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/login' component={LoginPage} />
						<Route path='/signin' component={SignInPage} />
						<Route path='/cart' component={Cart} />
						<PrivateRoute path='/order'>
							<Order />
						</PrivateRoute>
						<Route path='/products/:category' component={Products} />
						<Route path='/product/:id' component={PrdouctPage} />
						<Route path='/error' component={ErrorPage} />
						<Route path='*' component={NotFound} />
					</Switch>
				</div>
			</Router>
		</StateProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
