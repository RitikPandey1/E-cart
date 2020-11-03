import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Toolbar, Typography } from "@material-ui/core";
import Spinner from "./spinner/Spinner";
import axios from "axios";
import MainGridLayout from "./MainGridLayout";
import Cookies from "js-cookie";
const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    display: "flex",
    justifyContent: "start",
  },
  card: {
    height: "100%",
    border: "0.5px solid #ecf0f1",
    boxShadow: "0px 8px 15px -4px rgba(0,0,0,0.39)",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  grid: {
    margin: "10px 0 10px 0",
  },
}));
const Products = ({ history }) => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();
  const { category } = useParams();
  //console.log(category);
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
            <Grid container spacing={3} className={classes.grid}>
              {products.map((product, i) => (
                <Grid
                  container
                  item
                  xs={12}
                  sm={6}
                  key={i}
                  direction="column"
                >
                  <div className={classes.card}>
                    <Grid item className={classes.box}>
                      <img
                        src={`/api/v1/ecartproducts/product_image/${product._id}/${product.images[0]}`}
                        style={{ maxWidth: "100%" }}
                      />
                    </Grid>
                    <Grid item>
                      <Toolbar />
                      <Typography variant="subtitle1">
                        {" "}
                        {product.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">
                        {" "}
                        &#8377; {product.price.toLocaleString()}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() =>
                          history.push(`/product/${product._id}`)
                        }
                      >
                        See more
                      </Button>
                    </Grid>
                  </div>
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
