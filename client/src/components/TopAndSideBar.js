import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Toolbar,
  Typography,
  Hidden,
} from "@material-ui/core";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LaptopIcon from "@material-ui/icons/Laptop";
import HeadsetIcon from "@material-ui/icons/Headset";
import SurroundSoundIcon from "@material-ui/icons/SurroundSound";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Header from "./Header";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  Drawer: {
    width: 240,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    color: "#fff",
  },
}));

const TopAndSideBar = () => {
  const classes = useStyles();
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };
  const categoryLinks = [
    {
      title: "mobiles",
      path: "/products/mobiles",
      icon: <PhoneAndroidIcon />,
    },
    {
      title: "laptops",
      path: "/products/laptops",
      icon: <LaptopIcon />,
    },
    {
      title: "headsets",
      path: "/products/headsets",
      icon: <HeadsetIcon />,
    },
    {
      title: "speaker",
      path: "/products/speakers",
      icon: <SurroundSoundIcon />,
    },
  ];
  const navLinks = [
    {
      title: "cart",
      path: "/cart",
      icon: <ShoppingCartIcon />,
    },
    {
      title: "order",
      path: "/order",
      icon: <ListAltIcon />,
    },
  ];
  const sideDrawerList = (anchor) => (
    <div
      className={classes.Drawer}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Toolbar />
      <Divider />
      <List component="nav">
        {navLinks.map(({ title, path, icon }) => (
          <Link to={path} className={classes.linkText}>
            <ListItem button>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <Toolbar>
        <Typography>Category</Typography>
      </Toolbar>
      <List component="nav">
        {categoryLinks.map(({ title, path, icon }) => (
          <Link to={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <Header>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer("left", true)}
          className={classes.menuButton}
        >
          <ClearAllIcon fontSize="large" />
        </IconButton>
      </Header>
      <Hidden mdUp>
        <Drawer
          anchor="left"
          open={state.left}
          onOpen={toggleDrawer("left", true)}
          onClose={toggleDrawer("left", false)}
        >
          {sideDrawerList("left")}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer variant="permanent" open>
          {sideDrawerList("left")}
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
};

export default TopAndSideBar;
