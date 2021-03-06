import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Container,
  Button,
  ButtonBase,
} from "@material-ui/core";
import useStyles from "./style";
import Spinner from "../spinner/Spinner";
import GridLayout from "../GridLayout/index";
import { connect } from "react-redux";
import { getOrders } from "../../redux/Actions/productAction";
import Reviews from "./Reviews";

function Order({ token, loading, orders, dispatch, history }) {
  const classes = useStyles();
  useEffect(() => {
    dispatch(getOrders(token));
  }, []);

  const [review, setReview] = useState({ open: false });

  const handleClick = (product, orderId) => {
    setReview({ ...review, open: true, product, orderId });
  };

  const onClose = () => {
    setReview({});
  };

  return (
    <GridLayout>
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <h1>My orders</h1>
          {orders.length === 0 ? (
            <Typography variant="h6">
              Your haven't order any product yet !
            </Typography>
          ) : (
            orders.map((order, i) => (
              <Grid container className={classes.orderItem} key={i}>
                <Grid item xs={12} md={4} className={classes.box}>
                  <img
                    src={`/api/v1/ecartproducts/product_image/${order.product._id}/${order.product.images[0]}`}
                    alt="product"
                    style={{ maxWidth: "100%", height: "100%" }}
                  />{" "}
                </Grid>
                <Grid item xs={12} md={4}>
                  <ButtonBase
                    onClick={() =>
                      history.push(`/product/${order.product._id}`)
                    }
                  >
                    <Typography className={classes.productName}>
                      {order.product.name}
                    </Typography>
                  </ButtonBase>
                  <Typography className={classes.productPrice}>
                    &#8377;{order.unitPrice.toLocaleString()}
                  </Typography>
                  <Typography variant="subtitle2">QTY : {order.qty}</Typography>
                  {order.qty > 1 ? (
                    <Typography variant="subtitle2">
                      Total Price : &#8377;
                      {(order.unitPrice * order.qty).toLocaleString()}
                    </Typography>
                  ) : null}
                  <Typography variant="subtitle2" className={classes.orderDate}>
                    {new Date(order.createdAt).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Typography>
                </Grid>

                <Grid item xs={12} md={4} className={classes.review}>
  
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleClick(order.product._id, order._id)}
                    >
                      Add Review
                    </Button>
                  
                </Grid>
              </Grid>
            ))
          )}

          <Reviews
            onClose={onClose}
            review={review}
            setReview={setReview}
            token={token}
          />
        </Container>
      )}
    </GridLayout>
  );
}

export default connect(({ auth, orders }) => ({
  token: auth.token,
  loading: orders.loading,
  orders: orders.data,
}))(Order);
