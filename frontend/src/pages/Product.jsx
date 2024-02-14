import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContex";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import ProductDisplay from "../components/productdisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  // Handle the case when product is undefined
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
