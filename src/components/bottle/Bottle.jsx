import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { img, name, price, stock } = bottle;
  console.log(bottle);
  return (
    <div className="card">
      <img className="img-size" src={img} alt="" />
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{stock} remaining</p>
      <button onClick={() => handleAddToCart(bottle)}>Bye Now</button>
    </div>
  );
};

export default Bottle;
