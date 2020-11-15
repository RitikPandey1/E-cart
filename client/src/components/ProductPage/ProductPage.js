import { Button, Grid, Toolbar, Typography, Paper } from "@material-ui/core";
import React, { useState } from "react";
import MainGridLayout from "../MainGridLayout";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import ProductInfo from "./ProductInfo";
import ProductRating from "./ProductRating";
import ProductReviews from "./ProductReviews";
import CartButton from "./CartButton";
import { useGetHook } from "../../CustomHook";

const useStyles = makeStyles({
  button: {
    margin: "10px auto 10px auto",
  },
  buttonArea: {
    display: "flex",
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "green",
  },
  review: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    justifyContent: "flex-start",
    marginTop: "5px",
  },
  paper: {
    padding: "15px",
  },
});

const ProductPage = ({ history, location }) => {
  const classes = useStyles();
  const [inCart, setCart] = useState(false);
 
  const { id } = useParams();
 const productUrl = `/api/v1/ecartproducts/product/${id}`;
 const reviewsUrl = `/api/v1/ecartproducts/product/${id}/reviews`;
  
  const [product, loading1, error1] = useGetHook(productUrl);
  const [reviews, loading2, error2] = useGetHook(reviewsUrl);
  
  if (error1 || error2) history.push("/error");


   const addToCart = async (token) => {
     const response = await axios.get(
       `/api/v1/ecartproducts/product/${id}/addtocart`,
       { headers: { Authorization: "Bearer ".concat(token) } }
     );
     if (response.data.status === "Success") {
       setCart(true);
     }
   };

  return (
    <MainGridLayout>
      {(loading1 || loading2)? (
        <Spinner />
      ) : (
        <Grid container direction="column">
          <ProductInfo product={product.data} classes={classes} />
          <Grid container item>
            <Grid item xs={12} sm={6} className={classes.buttonArea}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
              >
                Buy Now
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.buttonArea}>
              <CartButton
                addToCart={addToCart}
                inCart={(product.inCart) || inCart}
                classes={classes}
                history={history}
                location={location}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Toolbar />
            <ProductRating rating={ product.data.averageRating} />
          </Grid>
          <Grid item>
            <Toolbar />
            <Paper className={classes.paper}>
              <Typography variant="h4">Reviews</Typography>
              <ProductReviews productReviews={reviews.data} classes={classes} />
            </Paper>
          </Grid>
        </Grid>
      )}
    </MainGridLayout>
  );
};

export default ProductPage;
