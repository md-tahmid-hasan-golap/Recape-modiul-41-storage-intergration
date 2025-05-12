import React, { use } from "react";

const Bottles = ({ bottlesPromised }) => {
  const useBottlesPromised = use(bottlesPromised);
  console.log(useBottlesPromised);
  return <div></div>;
};

export default Bottles;
