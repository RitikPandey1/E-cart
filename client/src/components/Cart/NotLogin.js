import React from "react";
import { Container, Typography, Button } from "@material-ui/core";

const NotLogin = ({classes, location, history}) => (
  <Container className={classes.main}>
    <Typography variant="h6">Login to access your cart</Typography>
    <Button
      variant="contained"
      color="primary"
      onClick={() =>
        history.push({ pathname: "/user/login", state: { from: location } })
      }
    >
      login{" "}
    </Button>
  </Container>
);

export default NotLogin;
