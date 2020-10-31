import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductGrid from "./ProductGrid";
import TopBar from "./TopBar";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Footer from "./Footer";
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
      <Grid container direction="column">
        <Grid item>
          <TopBar />
        </Grid>
        <Grid item container>
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8}>
            <Switch>
              <Route
                path={`/products/:category`}
                component={ProductGrid}
              />
            </Switch>
          </Grid>
          <Grid item xs={1} sm={2} />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
