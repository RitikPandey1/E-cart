import React, { useEffect, useState } from "react";
import { Grid, Toolbar, Typography, Paper, Button } from "@material-ui/core";
import GridLayout from "../GridLayout";
import useStyles from "./style";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import ProductInfo from "./ProductInfo";
import ProductRating from "./ProductRating";
import ProductReviews from "./ProductReviews";
import CartButton from "./CartButton";
import { loadStripe } from "@stripe/stripe-js";
import { getProduct } from "../../redux/Actions/productAction";
import { connect } from "react-redux";
import axios from "axios";
import LoadingButton from "../LoadingButton";
const stripePromise = loadStripe(
  "pk_test_51HoAvtGaNOaCdqY8zStX6zrmS85OqUYM8kbJEQypYe9mO57w4RKuOkIUFPeCQb6hXNsBCyjVxInCU7bEEj0Fqlnu00D3595kX7"
);

const ProductPage = ({
  history,
  location,
  loadingPage,
  product,
  reviews,
  dispatch,
  inCart,
  token,
  cartLoading,
  isAuth,
}) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  const checkoutPage = async (event) => {
    if (isAuth) {
      const stripe = await stripePromise;
      setLoading(true);
      const products = [
        {
          id: product._id,
          name: product.name,
          price: product.price,
          qty: 1,
        },
      ];
      const response = await axios.post(
        "/api/v1/ecartproducts/create-checkout-session",
        { products },
        { headers: { Authorization: "Bearer ".concat(token) } }
      );
      setLoading(false);
      const session = response.data;

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        history.push("/error");
      }
    } else history.push({ pathname: "/user/login", state: { from: location } });
  };

  return (
    <GridLayout>
      {loadingPage ? (
        <Spinner />
      ) : (
        <Grid container direction="column" className={classes.main}>
          <ProductInfo product={product} classes={classes} />
          <Grid container item>
            <Grid item xs={12} sm={6} className={classes.buttonArea}>
              {loading ? (
                <LoadingButton text="Buy Now" className={classes.button} />
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  onClick={checkoutPage}
                >
                  Buy Now
                </Button>
              )}
            </Grid>
            <Grid item xs={12} sm={6} className={classes.buttonArea}>
              {cartLoading ? (
                <LoadingButton
                  text="Add to cart"
                  size="large"
                  style={{ margin: "10px auto 10px auto" }}
                />
              ) : (
                <CartButton
                  classes={classes}
                  product={product}
                  inCart={inCart}
                  dispatch={dispatch}
                  token={token}
                  history={history}
                  location={location}
                />
              )}
            </Grid>
          </Grid>
          <Grid item>
            <Toolbar />
            <ProductRating rating={product.averageRating} />
          </Grid>
          <Grid item>
            <Toolbar />
            <Paper className={classes.paper}>
              <Typography variant="h4">
                Reviews ({reviews.length && reviews.length})
              </Typography>
              <ProductReviews productReviews={reviews} classes={classes} />
            </Paper>
          </Grid>
        </Grid>
      )}
    </GridLayout>
  );
};

export default connect(({ getProduct, cart, auth }) => ({
  product: getProduct.product,
  reviews: getProduct.reviews,
  loadingPage: getProduct.loading,
  inCart: cart.inCart,
  token: auth.token,
  cartLoading: cart.loading,
  isAuth: auth.isAuth,
}))(ProductPage);
