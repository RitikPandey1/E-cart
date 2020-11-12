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
import Header from "../Header";
import { navLinks, categoryLinks } from "./links";
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
  const [state, setState] = useState({ left: false });
  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };
  
const LinkList = ({ link }) =>
  link.map(({ title, path, icon }) => (
    <Link to={path} className={classes.linkText} key={title}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </Link>
  ));

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
      <LinkList link={navLinks} />
    </List>
    <Divider />
    <Toolbar>
      <Typography>Category</Typography>
    </Toolbar>
    <List component="nav">
      <LinkList link={categoryLinks} />
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
