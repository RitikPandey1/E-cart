import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import routes from './routes';


export default function () {
	return (
		<React.Fragment>
			<Router>
				<Header />
				<Switch>
					{routes.map((route,i) => (
						<Route key={i} path={route.path} component={route.component} />
					))}
				</Switch>
			</Router>
		</React.Fragment>
	);
}
