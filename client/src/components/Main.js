import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Toolbar, Typography, Link, Paper} from "@material-ui/core";
import MainPageLayout from "./MainPageLayout";
import TopBar from "./TopBar";
import { Route ,Switch,useRouteMatch} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Main = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <div className={classes.root}>
      <TopBar />
      <Switch>
        <Route
          path={`${path}/products/:category`}
          component={MainPageLayout}
        />
      </Switch>
    </div>
  );
};

export default Main;
