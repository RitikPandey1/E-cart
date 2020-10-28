import {
  AppBar,
  Toolbar,
  IconButton,
   Container,
  } from "@material-ui/core";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#fff",
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  icon: {
    color: "#2980b9",
    fontFamily: "Roboto Slab",
    padding: "15px",
  },
});



const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Container className={classes.navbarDisplayFlex}>
            <IconButton className={classes.icon} aria-label="home" >
              <ShoppingCartIcon /> E CART
            </IconButton>

            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <ArrowDropDownCircleIcon fontSize="large" color="primary" />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Sign in</MenuItem>
              <MenuItem onClick={handleClose}>Login</MenuItem>
            </Menu>
          </Container>
        </Toolbar>
      </AppBar>
      
    </>
  );
};

export default Header;
