import React from "react";
import { useStyles } from "./styles";
import {Link} from "react-router-dom"
import { Container, Typography, Grid, Button } from "@mui/material";
import CartItem from "./CartItem";

const ShoppingCart = ({
  cart,
  handleEmptyCart,
  handleRemoveFromCart,
  handleUpdateCartQty,
}) => {
  const classes = useStyles();

  const EmptyCart = () => {
    <Typography variant="subtitle1">
      You have no items in your shopping cart, start shopping!
    </Typography>;
  };

  const FilledCart = () => {
    return (
      <>
        <Typography variant="h3">Your Shopping Cart</Typography>
        <Grid container spacing={3} marginTop="7%">
          {cart.line_items.map((item) => (
            <Grid
              item
              xs={12}
              sm={12}
              key={item.id}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <CartItem
                item={item}
                handleRemoveFromCart={handleRemoveFromCart}
                handleUpdateCartQty={handleUpdateCartQty}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h5">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </>
    );
  };

  if (!cart.line_items) {
    return "Loading...";
  }

  return (
    <Container className={classes.container}>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        {!cart.line_items ? <EmptyCart /> : <FilledCart />}
      </Typography>
    </Container>
  );
};

export default ShoppingCart;
