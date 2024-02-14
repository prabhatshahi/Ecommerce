import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import all_product from "./../components/Assets/all_product";
import { ShopContext } from "../context/ShopContex";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
    </div>
  );
};

export default ShopCategory;
