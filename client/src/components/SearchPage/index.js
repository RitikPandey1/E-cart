import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import GridLayout from "../GridLayout";
import Spinner from "../spinner/Spinner";
import ProductCard from "../Products/productCard";
import { Typography } from "@material-ui/core";
import axios from "axios";

function SearchPage() {
  const { srchTxt } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getResult = async () => {
      setLoading(true);
      setProducts([]);
      const response = (
        await axios.get(`/api/v1/ecartproducts/search/${srchTxt}`)
      ).data;
      setLoading(false);
      setProducts(response.data);
    };
    getResult();
  }, [srchTxt]);
  return (
    <GridLayout>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Typography variant="h5">Search result of "{srchTxt}"</Typography>
          {products.length === 0 ? (
            <Typography>Found nothing</Typography>
          ) : (
            products.map((product, i) => (
              <ProductCard product={product} history={history} key={i} />
            ))
          )}
        </>
      )}
    </GridLayout>
  );
}

export default SearchPage;
