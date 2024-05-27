import React from "react";
import storeItems from "../data/storeItems.json";
import Card from "./Card";
const Store = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 ml-3">Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gab-8 px-2 pb-2 justify-items-center">
        {storeItems.map((e) => (
          <Card {...e} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default Store;
