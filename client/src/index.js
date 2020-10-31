import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  
} from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Main from "./components/Main";
import SignInPage from "./components/SignInPage";


import "./index.css";

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/products/mobiles" />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signin" component={SignInPage} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
