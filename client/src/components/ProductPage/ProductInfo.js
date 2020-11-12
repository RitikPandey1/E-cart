import React from "react";
import { Grid, Toolbar, Typography } from "@material-ui/core";

export default ({ product, classes }) => (
  <>
    {" "}
    <Grid item>
      <Toolbar />
      <Typography variant="h5">{product.name}</Typography> <Toolbar />
    </Grid>
    <Grid item className={classes.imageBox}>
      <img
        src={`/api/v1/ecartproducts/product_image/${product._id}/${product.images[1]}`}
        alt="product"
        style={{ maxWidth: "100%" }}
      />
    </Grid>
    <Grid item>
      <Toolbar />{" "}
      <Typography variant="h4">
        {" "}
        &#8377; {product.price.toLocaleString()}{" "}
      </Typography>
    </Grid>
    <Grid item>
      <Toolbar />
      <Toolbar>
        <Typography variant="h6">{product.description}</Typography>
      </Toolbar>
      <Toolbar />
    </Grid>{" "}
  </>
);
