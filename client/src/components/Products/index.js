import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../../redux/Actions/productAction";
import { Typography } from "@material-ui/core";

import ProductCard from "./productCard";
import Spinner from "../spinner/Spinner";
import GridLayout from "../GridLayout";
import useStyles from "./style";

const Products = ({ history, loading, category, products, dispatch }) => {
  const classes = useStyles();
  const { name } = useParams();
  useEffect(() => {
    dispatch(getProducts(name));
  }, [name]);

  return (
    <GridLayout>
      <div style={{ overflow: "hidden" }}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {" "}
            <Typography variant="h4" className={classes.mainHeading}>
              Category / {category.toUpperCase()}
            </Typography>
            {products.map((product, i) => (
              <ProductCard product={product} history={history} key={i} />
            ))}
          </>
        )}
      </div>
    </GridLayout>
  );
};

export default connect(({ getProducts }) => ({
  loading: getProducts.loading,
  category: getProducts.category,
  products: getProducts.products,
}))(Products);
