import React from "react";
import Hero from "../components/Hero/Hero"; // Adjust the path to match the actual location of the Hero component
import Popular from "../components/popular/Popular.jsx";
import Offers from "../components/offers/Offers.jsx";
import NewCollection from "../components/NewCollection/NewCollection.jsx";
import NewsLater from "../components/NewsLater/NewsLater.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLater />
      <Footer />
    </div>
  );
};

export default Shop;
