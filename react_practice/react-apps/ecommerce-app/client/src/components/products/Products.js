import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product";
import { Routes, Route } from "react-router-dom";

const Products = ({ products, onAddToCart }) => {
  return (
    <main>
      <Grid container justify="center" spacing={4} marginTop="7%">
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={8} sm={6} md={3} lg={2}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
