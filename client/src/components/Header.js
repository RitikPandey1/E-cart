import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


const useStyles = makeStyles(theme=>({
  header: {
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 240px)",
      marginLeft:240 
   }
  },
  icon: {
    fontFamily: "Roboto Slab",
    padding: "15px",
    color:"#fff"
  },
}) );

const Header = ({children}) => {
  const classes = useStyles();  
  return (
    <>
      <AppBar  className={classes.header}>
        <Toolbar>
          {children}
          <IconButton className={classes.icon} aria-label="home">
              <ShoppingCartIcon /> E CART
            </IconButton>     
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
