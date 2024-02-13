import React from "react";
import "./Item.css";
import data_product from "../Assets/data";

const Item = (props) => {
  // Define props as an argument
  return (
    <div className="item">
      <img src={props.image} alt="" />{" "}
      {/* Use props.image instead of PaymentResponse.image */}
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">${props.new_price}</div>
        <div className="item-price-old">
          ${props.old_price}
          {/* <span>{props.discount}%</span> */}
        </div>
      </div>
    </div>
  );
};

export default Item;
