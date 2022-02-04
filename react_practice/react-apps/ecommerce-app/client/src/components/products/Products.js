import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product";
import "./Products.css"
import {useStyles} from "../styles"


const Products = ({ products, onAddToCart }) => {
  const classes = useStyles()

  return (
    <main>
      <Grid container justify="center" spacing={3} ml={4} mr={4} marginTop="7%" className={classes.productsContainer}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={8} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
