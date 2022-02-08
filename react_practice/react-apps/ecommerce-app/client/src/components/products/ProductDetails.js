import React, { useState, useEffect } from "react";
import { CardActions, Button } from "@mui/material";
import { useStyles } from "./styles";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { commerce } from "../../lib/commerce";

const ProductDetails = ({ onAddToCart }) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();
  const classes = useStyles();

  const getProductDetails = async () => {
    try {
      const response = await commerce.products.retrieve(productId, {
        type: "id",
      });
      setProduct(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [productId]);

  if (isLoading) {
    return <div className={classes.loading}>"Loading..."</div>;
  }

  return (
    <div className="product__main-container">
      <div className="product__horizontal-images-container">
        <div className="product__main-image">
          <img
            className="image"
            src={product.image.url}
            alt={product.variant_groups.name}
          />
        </div>
        <div className="product__color-options">
          {product.assets.map((color, id) => {
            return (
              <img
                className="product__color-image"
                key={id}
                src={color.url}
                alt="alt"
              />
            );
          })}
        </div>
      </div>
      <div className="product__product-content">
        <div className="container">
          <h3 className="product__title">{product.name}</h3>
          <h5 className="product__category">{product.categories[0]?.name}</h5>
          <h4 className="product__price">
            {product.price.formatted_with_symbol}
          </h4>
        </div>
        <div className="container">
          <p className="product__description">
            {product.description.replace(/<(?:.|\n)*?>/gm, "")}
          </p>
        </div>
        <div className="product__details">
          <span>Model:</span>
          <span className="details">{product.id}</span>

          <span>Color:</span>
          <span className="details">
            {product.variant_groups[0]?.options[0].name}
          </span>

          <span>Delivery:</span>
          <span className="details">Domestic, International</span>
        </div>
        <div>
          <CardActions className="cart-button">
            <div>
              <Button
                type="button"
                size="small"
                variant="contained"
                sx={{
                  fontSize: "16px",
                  backgroundColor: "#FFC800",
                  color: "black",
                }}
                onClick={() => onAddToCart(product.id, 1)}
              >
                Add To Cart
              </Button>
            </div>
          </CardActions>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
