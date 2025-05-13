import React, { use, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css";
const Bottles = ({ bottlesPromised }) => {
  const [cart, setCart] = useState([]);
  const useBottlesPromised = use(bottlesPromised);
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };
  //   console.log(useBottlesPromised);
  return (
    <div>
      <h3>Bottles Count : {useBottlesPromised.length}</h3>
      <p>Added to cart : {cart.length}</p>
      <div className="bottles-containar">
        {useBottlesPromised.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
