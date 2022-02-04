import React from "react";
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
import { commerce } from "../../lib/commerce";

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQty }) => {
  const classes = useStyles();

  return (
    <Card key={item.id} sx={{ height: 150 }} className={classes.root}>
      <CardMedia
        component="img"
        className={classes.media}
        image={item.image.url}
        title={item.name}
      />
      <Box className={classes.contentBox}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" fontWeight="bold" pr={10}>
            {item.name}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" color="green">
            {item.line_total.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button
              type="button"
              size="small"
              sx={{ fontSize: "28px" }}
              onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button
              type="button"
              size="small"
              sx={{ fontSize: "22px" }}
              onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </div>
        </CardActions>
        <Button
          type="button"
          size="small"
          variant="contained"
          color="error"
          className={classes.remove}
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </Box>
    </Card>
  );
};

export default CartItem;
