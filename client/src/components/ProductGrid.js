import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Toolbar, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Spinner from "./spinner/Spinner";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
}));
const MainPageLayout = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();
  const { category } = useParams();
  useEffect(() => {
    const getdata = async () => {
      setLoading(true);
      const response = await axios.get(
        `/api/v1/ecartproducts/category/${category}`
      );
      setLoading(false);
      console.log(response.data.data);
      setProducts(response.data.data);
    };
    getdata();
  }, [category]);

  return (
    <>
      <div
        style={{ overflow: "hidden", marginTop: "50px", marginBottom: "50px" }}
      >
        {loading ? (
          <Spinner />
        ) : (
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
                    <Typography gutterBottom variant="h6">
                      {product.name}
                    </Typography>
                    <Typography variant="h7">
                      {" "}
                      &#8377; {product.price.toLocaleString()}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" color="primary">
                      See full description
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </>
  );
};
export default MainPageLayout;
