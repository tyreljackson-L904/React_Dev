import React from "react";
import {
  Card,
  Typography,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  AvatarGroup,
  Avatar,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { useStyles } from "../styles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate("../productdetails");
  };

  return (
    <div>
      <Card key={product.id} className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.image.url}
          title={product.name}
          onClick={handleClick}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h7">{product.name}</Typography>
            <Typography variant="body2" color="green">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.cardContent}
          >
            {product.seo.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <AvatarGroup>
            {product.assets.map((id) => {
              return (
                <Avatar
                  key={id}
                  src={product.assets.url}
                  sx={{ width: 24, height: 24 }}
                />
              );
            })}
          </AvatarGroup>
          <IconButton
            aria-label="Add to Cart"
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCart sx={{ fontSize: 18 }} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
