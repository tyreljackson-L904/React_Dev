import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { useStyles } from "./styles";
import { useParams } from "react-router-dom";
import { commerce } from "../../lib/commerce";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const classes = useStyles();
  const { productId } = useParams();

  const getProductDetails = async () => {
    try {
      const { data } = await commerce.products.retrieve(productId);

      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <>
      <Box container className={classes.main}>
        <Box container className={classes.productImage}>
          <CardMedia
            component="img"
            className={classes.media}
            image={product.image.url}
            title={product.name}
          />
          <Card className={classes.colorOptions}></Card>
        </Box>
        <Card container className={classes.productDetails}></Card>
      </Box>
    </>
  );
};

export default ProductDetails;
