import React from "react";
import { Grid, ButtonBase, Typography, Chip } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

import useStyles from "./style";

function ProductCard({ product, history }) {
  const classes = useStyles();
  return (
    <Grid
      container
      component={ButtonBase}
      onClick={() => history.push(`/product/${product._id}`)}
      className={classes.flexBox1}
    >
      <Grid item xs={12} sm={4} className={classes.box}>
        <img
          src={`/api/v1/ecartproducts/product_image/${product._id}/${product.images[0]}`}
          alt="product"
          style={{ maxWidth: "100%", height: "100%" }}
        />
      </Grid>
      <Grid item xs={12} sm={8} className={classes.box2}>
        <Typography className={classes.productName}> {product.name}</Typography>
        {product.averageRating && (
          <Chip
            size="small"
            style={{ backgroundColor: "#27ae60", color: "#fff" }}
            label={product.averageRating}
            icon={<StarIcon style={{ color: "#fff" }} />}
          />
        )}
        <Typography className={classes.productPrice}>
          &#8377;{product.price.toLocaleString()}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ProductCard;
