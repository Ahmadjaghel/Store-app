import React from "react";
import { UseCartContext } from "../Context/cartContext";
import storeItems from "../data/storeItems.json";
import Item from "./Item";
import formatCurrency from "./formatCurrency";
import { Offcanvas } from "bootstrap";

const shoppingItems = () => {
  const { cartItems } = UseCartContext();
  const Prices = storeItems.map(
    (item) =>
      cartItems.find((el) => el.id == item.id)?.quantity * item.price || 0
  );
  const totalPrice = Prices.reduce((current, ele) => current + ele);
  return (
    <div>
      {cartItems.length ? (
        <div>
          <div className="container w-[45%] pb-2">
            {storeItems.map((item) => {
              if (cartItems.find((el) => el.id == item.id))
                return <Item {...item} key={item.id} />;
            })}
          </div>
          <div className="container w-[45%] pb-2 flex justify-end font-bold">
            Total Price: {formatCurrency(totalPrice)}
          </div>
        </div>
      ) : (
        <div className="mx-auto w-fit py-20">
          There are no items to show you .....
        </div>
      )}
    </div>
  );
};

export default shoppingItems;
