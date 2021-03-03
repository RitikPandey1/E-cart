import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes";
import { connect } from "react-redux";
import { loadCart } from "./redux/Actions/cartActions";
import { clearError } from "./redux/Actions/authAction";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function PrivateRoute({ token, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/user/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App({ token, dispatch, error }) {
  useEffect(() => {
    dispatch(loadCart(token));
  });
  const handleClose = () => {
    dispatch(clearError());
  };

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          {routes.map((route, i) => {
            if (route.public) {
              return (
                <Route
                  exact={route.exact}
                  key={i}
                  path={route.path}
                  component={route.component}
                />
              );
            }
            return (
              <PrivateRoute path={route.path} token={token}>
                <route.component />
              </PrivateRoute>
            );
          })}
        </Switch>
      </Router>
      <Snackbar open={error ? true : false} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}

export default connect(({ auth}) => ({
  token: auth.token,
  error: auth.error,
}))(App);
