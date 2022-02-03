import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product";


const Products = ({ products, onAddToCart }) => {
  return (
    <main>
      <Grid container justify="center" spacing={4} marginTop="7%">
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
