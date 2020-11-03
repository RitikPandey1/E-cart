import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Spinner from "./spinner/Spinner";
import axios from "axios";
import MainGridLayout from "./MainGridLayout";
import Cookies from "js-cookie";
const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
}));
const Products = ({ history }) => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();
  const { category } = useParams();
  console.log(category);
  useEffect(() => {
    const getdata = async () => {
      setLoading(true);
      const response = await axios.get(
        `/api/v1/ecartproducts/category/${category}`
      );
      setLoading(false);
      // console.log(response.data.data);
      setProducts(response.data.data);
    };
    getdata();
  }, [category]);

  return (
    <MainGridLayout>
      <div style={{ overflow: "hidden" }}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Typography variant="h4">{category}</Typography>
            <Grid container spacing={3}>
              {products.map((product, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Card className={classes.card} elevation={2}>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="250"
                      image={`/api/v1/ecartproducts/product_image/${product._id}/${product.images[0]}`}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="subtitle1">
                        {product.name}
                      </Typography>
                      <Typography variant="h6">
                        {" "}
                        &#8377; {product.price.toLocaleString()}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() =>
                          history.replace(`/product/${product._id}`)
                        }
                      >
                        See more
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </div>
    </MainGridLayout>
  );
};
export default Products;
