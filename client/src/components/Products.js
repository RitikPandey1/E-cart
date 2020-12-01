import React from "react";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import { Typography, ButtonBase, Chip, Button, TextField, IconButton } from "@material-ui/core";
import Spinner from "./spinner/Spinner";
import MainGridLayout from "./MainGridLayout";
import { useGetHook } from "../customHook";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    height: "130px",
  },
  productName: {
    fontSize: "18px",
  },
  productPrice: {
    fontSize: "20px",
  },
  card: {
    height: "100%",
    border: "0.5px solid #ecf0f1",
    padding: "10px",
  },
  flexBox1: {
    alignItems: "center",
    border: "1px solid #eee",
    boxShadow: "0 10px 6px -6px #d4d4d4",
    margin: "20px 0",
    borderRadius: "5px",
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
  mainHeading: {
    margin: "20px 0",
    color: "#111",
    fontSize: "25px",
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 0",
  },
  srearchField: {
    width:'300px',
    boxShadow: "0 10px 6px -6px #dcdcdc",
  },
  srcbtn: {
    boxShadow: "0 10px 6px -6px #dcdcdc",
    marginLeft: '-10px',
    backgroundColor: '#3f51b5',
  },
}));
const Products = ({ history }) => {
  const classes = useStyles();
  const { category } = useParams();
  const url = `/api/v1/ecartproducts/category/${category}`;
  const [result, loading, error] = useGetHook(url);

  if (error) history.push("/error");

  return (
    <MainGridLayout>
      <div style={{ overflow: "hidden" }}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {" "}
            <div className={classes.searchBox}>
              <TextField  className={classes.srearchField} label="Search" variant="outlined" size="small" />
              <Button className={classes.srcbtn}  variant="contained" color="primary" size="small" ><SearchIcon/></Button>
            </div>
            <Typography variant="h4" className={classes.mainHeading}>
              {category}
            </Typography>
            {result.data.map((product, i) => (
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
                    <Typography className={classes.productName}>
                      {" "}
                      {product.name}
                    </Typography>
                  </ButtonBase>
                  {product.averageRating && (
                    <Chip
                      size="small"
                      style={{ backgroundColor: "#27ae60", color: "#fff" }}
                      label={product.averageRating}
                      icon={<StarIcon style={{ color: "#fff" }} />}
                    />
                  )}

                  <Typography className={classes.productPrice}>
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
