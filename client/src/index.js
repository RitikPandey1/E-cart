import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import Products from "./components/Products";
import SignInPage from "./components/SignInPage";
import TopAndSideBar from "./components/TopAndSideBar";

import "./index.css";
import MainGridLayout from "./components/MainGridLayout";
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
const App = () => {
  return (
    <div>
      <Router>
        <div style={{ display: "flex", flexDirection: "column",height:"100vh" }}>
          <TopAndSideBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/products/:category" component={Products} />
            <Route  path="/login" component={LoginPage} />
            <Route  path="/signin" component={SignInPage} />
            <Route path="*" component={NotFound} />
          </Switch>
         
        </div>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
