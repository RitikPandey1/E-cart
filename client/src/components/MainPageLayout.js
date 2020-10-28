import React,{useEffect,useState} from 'react';
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Spinner from "./spinner/Spinner";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
      setLoading(false)
    console.log(response.data.data);
    setProducts(response.data.data);
    }
    getdata();  
  },[category]);  
  
    
  return (
    <>
      <Toolbar />
      <div style={{ overflow: "hidden" }}>
        {loading ? (
          <Spinner/>
        ) : (
          <Grid container spacing={2}>
            {products.map((product, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="300"
                      image={`/api/v1/ecartproducts/product_image/${product._id}/${product.images[0]}`}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Rs {product.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </>
  );
}
export default MainPageLayout;