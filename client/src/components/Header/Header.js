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
  AppBar,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { navLinks, categoryLinks } from "./links";
import { Link, useHistory } from "react-router-dom";
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
  icon: {
    fontFamily: "Roboto Slab",
    padding: "15px",
    color: "#fff",
  },
  header: {},
  wrapper: {
    position: "absolute",
    right: 0,
  },
}));

const Header = () => {
  const [state, setState] = useState({ left: false });
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const openCategory = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const closeCategory = () => {
    setAnchorEl1(null);
  };
   const openNav = (event) => {
     setAnchorEl2(event.currentTarget);
   };

   const closeNav = () => {
     setAnchorEl2(null);
   };
  const classes = useStyles();
  const history = useHistory();

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
      <AppBar className={classes.header}>
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
            className={classes.menuButton}
          >
            <ClearAllIcon fontSize="large" />
          </IconButton>

          <IconButton
            className={classes.icon}
            aria-label="home"
            onClick={() => {
              history.push("/");
            }}
          >
            <ShoppingCartIcon /> E CART
          </IconButton>
          <Hidden smDown>
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "20px" }}
                onClick={openCategory}
                disableElevation
              >
                Category <ExpandMoreIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl1}
                keepMounted
                open={Boolean(anchorEl1)}
                onClose={closeCategory}
              >
                {categoryLinks.map((link) => (
                  <MenuItem
                    onClick={() => {
                      setAnchorEl1(null);
                      history.push(link.path);
                    }}
                  >
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.title} />
                  </MenuItem>
                ))}
              </Menu>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "10px" }}
                disableElevation
                onClick={openNav}
              >
                More <ExpandMoreIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={closeNav}
              >
                {navLinks.map((link) => (
                  <MenuItem
                    onClick={() => {
                      setAnchorEl2(null);
                      history.push(link.path);
                    }}
                  >
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.title} />
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>

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
    </React.Fragment>
  );
};

export default Header;
