import React from "react";
import { Container, Typography } from "@material-ui/core";

const EmptyCart = ({classes}) => (
  <Container className={classes.main}>
    <Typography variant="h6">Your Cart is Empty !</Typography>
    <div className={classes.emptyCart}>
      <img
        src="../resources/emptyCart.png"
        alt="empty"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  </Container>
);

export default EmptyCart;