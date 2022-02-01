import React from "react";
import {
  Card,
  Typography,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    margin: "10px",
  },
  media: {
    height: 0,
    paddingTop: "54.25%",
    marginLeft: "40px",
    marginRight: "40px",
    marginTop: "20px",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <div>
      <Card key={product.id} className={classes.root}>
        <CardMedia className={classes.media} image={product.img} />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="h7">{product.price}</Typography>
          </div>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.cardContent}
          >
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
