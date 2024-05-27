import React from "react";
import formatCurrency from "./formatCurrency";
import { UseCartContext } from "../Context/cartContext";
const Item = ({ id, name, price, img }) => {
  const { removeitem, cartItems } = UseCartContext();
  const quantity = cartItems.find((ele) => ele.id == id).quantity;
  return (
    <div className="mt-2 flex justify-between items-center  ">
      <div className="flex gap-2 items-center">
        <img src={img} className=" w-[125px] h-[100px] rounded-md" />
        <div>
          <div>
            {name}
            {quantity > 1 ? (
              <span className="font-think text-xs text-neutral-500 ">
                ×{quantity}
              </span>
            ) : null}
          </div>
          <div className="font-think text-md text-neutral-500">
            {formatCurrency(price)}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="font-think text-md text-neutral-500">
          {formatCurrency(price * quantity)}
        </div>
        <div>
          <button
            onClick={() => removeitem(id)}
            className="bg-red-700 text-white w-5 h-5 text-md rounded-full flex justify-center items-center pb-[2px]"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
