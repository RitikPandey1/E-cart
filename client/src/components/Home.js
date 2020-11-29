import React from "react";
import { Grid } from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LaptopIcon from "@material-ui/icons/Laptop";
import HeadsetIcon from "@material-ui/icons/Headset";
import SurroundSoundIcon from "@material-ui/icons/SurroundSound";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "25px",
    marginTop: "60px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },

  mainImg: {
    padding: "50px",
    marginTop: "60px",

    "& img": {
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      height: "50vh",
    },
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 5px",
    color: "#2E409F",

    "& h3": {
      margin: "5px 0",
    },
    "& h2": {
      margin: "5px 0",
      color: "#001893",
    },
    [theme.breakpoints.down("sm")]: {
      "& img": {
        width: "40px",
        height: "40px",
      },
    },
  },
  shopIcon: {
    fontSize: "60px",
    color: "#FAA720",
  },
  shopCatg: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      backgroundColor: "#f1f2f6",
    },
  },
  topCatg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f2f6",
    marginTop: "50px",
  },
  catg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "250px",
    height: "50px",
    borderRadius: "25px",
    backgroundColor: "#FAA720",
    color: "#fff",
    fontSize: "22px",
  },
}));

export default function () {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="column">
        <Grid item xs={12} className={classes.mainImg}>
          <img src="/resources/695.svg" alt="online shopping" />
        </Grid>
        <Grid container item>
          <Grid item xs={12} sm={4} className={classes.info}>
            <img src="/resources/countries.svg" alt="countries" />
            <h3>countries</h3>
            <h2>12 +</h2>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.info}>
            <img src="/resources/customers.svg" alt="customers" />
            <h3>customers</h3>
            <h2>15000 +</h2>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.info}>
            <img src="/resources/stores.svg" alt="stores" />
            <h3>stores</h3>
            <h2>250 +</h2>
          </Grid>
        </Grid>
        <div style={{ padding: "20px"  }}>
          {" "}
          <Grid container item spacing={5}>
            <Grid item xs={12} className={classes.topCatg}>
              {" "}
              <div className={classes.catg}>Shop by Category</div>{" "}
            </Grid>
            <Grid item xs={6} md={3}>
              {" "}
              <Link to="/products/mobiles" className={classes.shopCatg}>
                <PhoneAndroidIcon className={classes.shopIcon} />
                <p> Mobiles</p>
              </Link>
            </Grid>

            <Grid item xs={6} md={3}>
              <Link to="/products/laptops" className={classes.shopCatg}>
                <LaptopIcon className={classes.shopIcon} />
                <p>Laptops</p>
              </Link>
            </Grid>

            <Grid item xs={6} md={3}>
              <Link to="/products/headsets" className={classes.shopCatg}>
                {" "}
                <HeadsetIcon className={classes.shopIcon} />
                <p>Headsets</p>
              </Link>
            </Grid>

            <Grid item xs={6} md={3}>
              <Link to="/products/speakers" className={classes.shopCatg}>
                <SurroundSoundIcon className={classes.shopIcon} />
                <p>Speakers</p>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
