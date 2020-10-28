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
import TopBar from "./components/TopBar";
import Main from "./components/Main";
import MainPageLayout from "./components/MainPageLayout";

import "./index.css";

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Redirect exact from ="/" to="/home"/>
          <Route  path="/home" component={Main} />
        </Switch>
        
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
