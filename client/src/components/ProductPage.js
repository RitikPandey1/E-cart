import {
  Button,
  Grid,
  Toolbar,
  Typography,
  Paper,
  Avatar,
  Divider,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MainGridLayout from "./MainGridLayout";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "./spinner/Spinner";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  button: {
    margin: "10px auto 10px auto",
  },
  buttonArea: {
    display: "flex",
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "green",
  },
  review: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    justifyContent: "flex-start",
    marginTop: "5px",
  },
  paper: {
    padding: "15px",
  },
});
const ProductPage = () => {
  const classes = useStyles();
  const [product, setProduct] = useState();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const getProducts = await axios.get(`/api/v1/ecartproducts/product/${id}`);
      const getReviews = await axios.get(
        `/api/v1/ecartproducts/product/${id}/reviews`
      );
      setProduct(getProducts.data.data);
      setReviews(getReviews.data.data);
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
            <Typography variant="h5">{product.name}</Typography> <Toolbar />
          </Grid>
          <Grid item className={classes.imageBox}>
            <img
                src={`/api/v1/ecartproducts/product_image/${product._id}/${product.images[1]}`}
                alt="product"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid item>
            <Toolbar />{" "}
            <Typography variant="h4">
              {" "}
              &#8377; {product.price.toLocaleString()}{" "}
            </Typography>
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
                Buy Now
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
          <Grid item>
            <Toolbar />
            {product.averageRating ? (
              <>
                <Typography variant="h4">
                  Rating : {product.averageRating}{" "}
                </Typography>
                <Rating
                  name="half-rating"
                  defaultValue={product.averageRating}
                  precision={0.1}
                  size="large"
                  readOnly
                />
              </>
            ) : (
              <Typography variant="h4">Rating: Not Available</Typography>
            )}
          </Grid>
          <Grid item>
            <Toolbar />
            <Paper className={classes.paper}>
              <Typography variant="h4">Reviews</Typography>
              {reviews.length ? (
                reviews.map((review,i) => (
                  <div className={classes.review} key={i}>
                    <Avatar className={classes.avatar}>
                      {" "}
                      {review.user.name[0]}{" "}
                    </Avatar>
                    <Typography variant="subtitle1">
                      {review.user.name}
                    </Typography>
                    <Typography variant="caption"> {review.review} </Typography>
                    <Rating
                      name="half-rating"
                      defaultValue={review.rating}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                    <Divider />
                  </div>
                ))
              ) : (
                <Typography variant="subtitle1">Not Available</Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      )}
    </MainGridLayout>
  );
};

export default ProductPage;
