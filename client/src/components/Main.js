import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Toolbar, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  block: {
    background: "#F39C12",
    borderRadius: "15px",
    width: "200px",
    height: "130px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "#E67E22",
    },
  },
  headText: {
    fontFamily: "Roboto Slab",
    color: "#D35400",
  },
  linkText: {
    textDecoration: `none`,
    color: `white`,
    margin: "10px",
    fontSize: "15px",
    cursor: "pointer",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar></Toolbar>
      <Grid container>
        <Grid item xs={12}>
          <Container className={classes.container}>
            <Typography
              className={classes.headText}
              variant="h4"
              algin="center"
            >
              E CART <br />
              BUY BEST PRODUCTS <br />
              AT BEST PRICE
            </Typography>
          </Container>
          <Toolbar />
        </Grid>
        <Grid item  sm={12} md={3}>
          <Container className={classes.container}>
            <div className={classes.block}>
              <img src="/resources/phone_iphone-black-48dp 1.svg" />
              <Link className={classes.linkText}>Mobiles</Link>
            </div>
          </Container>
        </Grid>
        <Grid item  sm={12} md={3}>
          <Container className={classes.container}>
            <div className={classes.block}>
              <img src="/resources/laptop_chromebook-black-48dp 1.svg" />{" "}
              <Link className={classes.linkText}>Laptops</Link>
            </div>
          </Container>
        </Grid>
        <Grid item  sm={12} md={3}>
          <Container className={classes.container}>
            <div className={classes.block}>
              <img style={{marginTop:"5px"}} src="/resources/Vector.svg" />{" "}
              <Link className={classes.linkText}>Headsets</Link>
            </div>
          </Container>
        </Grid>
        <Grid item sm={12} md={3}>
          <Container className={classes.container}>
            <div className={classes.block}>
              <img src="/resources/surround_sound-black-48dp 1.svg" />{" "}
              <Link className={classes.linkText}>Speakers</Link>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;


