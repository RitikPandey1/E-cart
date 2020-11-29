import React from "react";
import { Grid, Toolbar } from "@material-ui/core";


const MainGridLayout = ({children}) => {
  
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
