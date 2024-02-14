import React from "react";
import "./ProductDisply.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = ({ product }) => {
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          {[1, 2, 3, 4].map((index) => (
            <img
              key={index}
              src={product.image}
              alt={`Product Image ${index}`}
            />
          ))}
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.image}
            alt="Main Product Image"
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          {[...Array(4)].map((_, index) => (
            <img key={index} src={star_icon} alt="Star Icon" />
          ))}
          <img src={star_dull_icon} alt="Dull Star Icon" />
          <p>(122)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
