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

const Product = ({ product }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate("../productdetails");
  };

  return (
    <div>
      <Link to="/productdetails">
        <Card key={product.id} className={classes.root} onClick={handleClick}>
          <CardMedia
            className={classes.media}
            image={product.image.url}
            title={product.name}
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
              {product.categories.name}
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
            <IconButton aria-label="Add to Cart">
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </Card>
      </Link>
    </div>
  );
};

export default Product;
