import React from "react";
import Button from "@material-ui/core/Button";
import Cookies from "js-cookie";


export default ({ addToCart, inCart ,classes ,history,location }) => {
  
    const handleCartClick = () => {
    const token = Cookies.get("jwt");
    if (token) {
      addToCart(token).catch((err) => history.push("/error"));
    } else {
      history.push({ pathname: "/login", state: { from: location } });
    }
  };

  if (inCart)
    return (
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        onClick={() => history.push("/cart")}
      >
        Go To Cart
      </Button>
    );
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      className={classes.button}
      onClick={handleCartClick}
    >
      Add To Cart
    </Button>
  );
};
