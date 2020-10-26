import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  Container,
  Link,
  Hidden,
} from "@material-ui/core";
import SideBar from "./SideBar";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#E74C3C",
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    color: `white`,
    backgroundColor: "#E67E22",
    margin: "10px",
    padding: "10px",
    fontSize: "15px",
    "&:hover": {
      background: "#F39C12",
    },
  },
  icon: {
    color: "#fff",
    fontFamily: "Roboto Slab",
    padding: "15px",
  },
});

const navLinks = [
  { title: "Sign in", path: "/signin" },
  { title: "Login", path: "/login" },
];

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Container className={classes.navbarDisplayFlex}>
          <IconButton className={classes.icon} aria-label="home">
            E CART
          </IconButton>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <Link
                  component="button"
                  href={path}
                  key={title}
                  underline="none"
                  className={classes.linkText}
                >
                  {title}
                </Link>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideBar navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
