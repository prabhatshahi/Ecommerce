import React from "react";
import "./NewsLater.css";

const NewsLater = () => {
  return (
    <div className="newslater">
      <h1>Get Exclusive Offer On your Email</h1>
      <p>Subscribe to our newsletter & stay updated</p>
      <div>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLater;
