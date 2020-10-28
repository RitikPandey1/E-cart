import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";


import "./index.css";

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Redirect exact from ="/" to="/home/products/mobiles"/>
          <Route  path="/home" component={Main} />
        </Switch>
        
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
