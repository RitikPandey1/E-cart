import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const MainGridLayout = ({children}) => {
  const classes = useStyles();
  return (
    <div>
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
