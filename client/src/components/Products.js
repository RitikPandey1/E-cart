import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useParams} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import {
  Typography,
  ButtonBase,
  Chip,
} from "@material-ui/core";
import Spinner from "./spinner/Spinner";
import axios from "axios";
import MainGridLayout from "./MainGridLayout";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    height: "130px",
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
  },
  flexBox1: {
    alignItems: "center",
    border: "1px solid #e2e8ea",
    marginTop: "20px",
  },
  box2: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
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
            {products.map((product, i) => (
              <Grid container key={i} className={classes.flexBox1}>
                <Grid item xs={12} sm={4} className={classes.box}>
                  <img
                    src={`/api/v1/ecartproducts/product_image/${product._id}/${product.images[0]}`}
                    alt="product"
                    style={{ maxWidth: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} sm={8} className={classes.box2}>
                  <ButtonBase
                    onClick={() => history.push(`/product/${product._id}`)}
                  >
                    <Typography variant="subtitle1"> {product.name}</Typography>
                  </ButtonBase>
                  {product.averageRating && (
                    <Chip
                      size="small"
                      style={{ backgroundColor: "#27ae60", color: "#fff" }}
                      label={product.averageRating}
                      icon={<StarIcon style={{ color: "#fff" }} />}
                    />
                  )}

                  <Typography variant="h6">
                    &#8377;{product.price.toLocaleString()}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </>
        )}
      </div>
    </MainGridLayout>
  );
};
export default Products;
