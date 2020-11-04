import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Products from "./components/Products";
import SignInPage from "./components/SignInPage";
import TopAndSideBar from "./components/TopAndSideBar";
import PrdouctPage from "./components/ProductPage";
import Cart from "./components/Cart";
import Order from "./components/Order";
import ErrorPage from "./components/ErrorPage";
import MainGridLayout from "./components/MainGridLayout";
import Cookies from "js-cookie";
const Home = () => (
  <MainGridLayout>
    <h1>welcome to E cart</h1>
  </MainGridLayout>
);

const NotFound = () => (
  <MainGridLayout>
    <h1>404 Page Not found</h1>
  </MainGridLayout>
);

const PrivateRoute = ({ children, islog, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      islog ? (
        children
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )
    }
  />
);

const App = () => {
  const [islog, setLog] = useState(false);
  useEffect(() => {
    Cookies.get("islogged") ? setLog(true) : setLog(false);
  }, [setLog]);
  return (
    <div>
      <Router>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TopAndSideBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signin" component={SignInPage} />
            <PrivateRoute path="/cart" islog={islog}>
              <Cart />
            </PrivateRoute>
            <PrivateRoute path="/order" islog={islog}>
              <Order />
            </PrivateRoute>
            <Route path="/products/:category" component={Products} />
            <Route path="/product/:id" component={PrdouctPage} />
            <Route path="/error" component={ErrorPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
