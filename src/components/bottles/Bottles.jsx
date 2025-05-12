import React, { use } from "react";

const Bottles = ({ bottlesPromised }) => {
  const useBottlesPromised = use(bottlesPromised);
  console.log(useBottlesPromised);
  return (
    <div>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Bottle Count : {useBottlesPromised.length}
      </h3>
    </div>
  );
};

export default Bottles;
