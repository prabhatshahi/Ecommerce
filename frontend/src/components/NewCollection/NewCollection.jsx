import React from "react";
import "./NewCollection.css";
import Item from "../Item/Item.jsx";
import new_collection from "../Assets/new_collections";
const NewCollection = () => {
  return (
    <div className="new-collection">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
