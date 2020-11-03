import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 240px)",
      marginLeft: 240,
    },
  },
}));

const MainGridLayout = ({children}) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Toolbar />
      <Grid container>
        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          {children}
        </Grid>
        <Grid item xs={1} sm={2} />
      </Grid>
      <Toolbar />
    </div>
  );
};

export default MainGridLayout;
