import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import SideNav from "./SideNav";
import Button from "@material-ui/core/Button";
import {
  IconButton,
  Grid,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Menu,
  TextField,
  Badge,
  Hidden,
} from "@material-ui/core";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import useStyles from "./style";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { categoryRoute, optionsRoute } from "./links";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/Actions/authAction";

function Header({ noOfItems, isAuth, dispatch }) {
  const [anchor, setAnchor] = useState({
    left: false,
  });
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [text, setText] = useState("");
  const history = useHistory();
  const classes = useStyles();

  const openCategory = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const closeCategory = () => {
    setAnchorEl1(null);
  };
  const openOption = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const closeOption = () => {
    setAnchorEl2(null);
  };

  const logout = () => dispatch(logoutUser);

  const toggleDrawer = (pos, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setAnchor({ [pos]: open });
  };

  return (
    <AppBar className={classes.header} position="static">
      <Grid container>
        <Grid item xs={12} md={2}>
          <div className={classes.top}>
            <div>
              <div className={classes.sidenav}>
                <IconButton onClick={toggleDrawer("left", true)}>
                  <ClearAllIcon className={classes.themeColor} />
                </IconButton>
                <SideNav
                  anchor={anchor}
                  toggleDrawer={toggleDrawer}
                  isAuth={isAuth}
                  logout={logout}
                />
              </div>

              <Button
                className={classes.icon}
                onClick={() => history.push("/")}
              >
                ECART
              </Button>
            </div>
            <IconButton
              color="primary"
              className={classes.smallCart}
              onClick={() => {
                history.push("/user/cart");
              }}
            >
              <Badge badgeContent={noOfItems} color="primary">
                {" "}
                <ShoppingCartIcon />{" "}
              </Badge>{" "}
            </IconButton>
          </div>
        </Grid>

        <Grid item xs={12} md={6} className={classes.center}>
          <div className={classes.searchBox}>
            <TextField
              className={classes.srearchField}
              label="Search Product"
              variant="outlined"
              size="small"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              className={classes.srcbtn}
              variant="contained"
              color="primary"
              size="small"
              onClick={() => {
                setText("");
                history.push(`/search/${text}`);
              }}
            >
              <SearchIcon />
            </Button>
          </div>
        </Grid>

        <Grid item md={4} className={classes.topnav}>
          <Button
            className={classes.themeColor}
            onClick={openCategory}
            disableElevation
          >
            Category <ArrowDropDownIcon className={classes.themeColor} />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={closeCategory}
          >
            {categoryRoute.map((link, i) => (
              <MenuItem
                key={i}
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
            className={classes.themeColor}
            onClick={openOption}
            disableElevation
          >
            option <ArrowDropDownIcon className={classes.themeColor} />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={closeOption}
          >
            {optionsRoute.map((link, i) => {
              if (link.title === "Cart") return null;
              return (
                <MenuItem
                  key={i}
                  onClick={() => {
                    setAnchorEl2(null);
                    history.push(link.path);
                  }}
                >
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.title} />
                </MenuItem>
              );
            })}
            {isAuth ? (
              <MenuItem
                onClick={() => {
                  setAnchorEl2(null);
                  logout();
                }}
              >
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="logout" />
              </MenuItem>
            ) : null}
          </Menu>
          <IconButton
            color="primary"
            onClick={() => {
              history.push("/user/cart");
            }}
          >
            <Badge badgeContent={noOfItems} color="primary">
              {" "}
              <ShoppingCartIcon />{" "}
            </Badge>{" "}
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default connect(({ cart, auth }) => ({
  noOfItems: cart.noOfItems,
  isAuth: auth.isAuth,
}))(Header);
