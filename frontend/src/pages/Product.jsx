import React, { useContext } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import all_product from "./../components/Assets/all_product";
import { ShopContext } from "./../context/ShopContex";

import Breadcrum from "../components/Breadcrum/Breadcrum";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} /> {/* Use product instead of prooduct */}
    </div>
  );
};

export default Product;
