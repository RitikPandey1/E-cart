import { Button, Grid, Toolbar, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MainGridLayout from "./MainGridLayout";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "./spinner/Spinner";
const useStyles = makeStyles({
  button: {
    margin: "10px auto 10px auto",
  },
  buttonArea: {
    display: "flex",
  },
});
const ProductPage = () => {
  const classes = useStyles();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/v1/ecartproducts/product/${id}`);
      console.log(data);
      setProduct(data.data);
      setLoading(false);
    };
    getData();
  }, [id]);
  return (
    <MainGridLayout>
      {loading ? (
        <Spinner />
      ) : (
        <Grid container direction="column">
          <Grid item>
            <Toolbar />
            <Typography variant="h4">{product.name}</Typography> <Toolbar />
          </Grid>
          <Grid item>
            <img
              src={`/api/v1/ecartproducts/product_image/${product._id}/${product.images[1]}`}
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid item>
            <Toolbar />{" "}
            <Typography variant="h4"> &#8377; {product.price} </Typography>
          </Grid>
          <Grid item>
            <Toolbar />
            <Toolbar>
              <Typography variant="h6">{product.description}</Typography>
            </Toolbar>
            <Toolbar />
          </Grid>
          <Grid container item>
            <Grid item xs={12} sm={6} className={classes.buttonArea}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
              >
                Buy
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.buttonArea}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
              >
                Add To Cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </MainGridLayout>
  );
};

export default ProductPage;
