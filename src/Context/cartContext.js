import { createContext, useContext, useState, useEffect } from "react";

const Cart = createContext({});
const initialCartItem = localStorage.getItem("Shopping-cart")
  ? JSON.parse(localStorage.getItem("Shopping-cart"))
  : [];

const CartProvid = ({ children }) => {
  const [cartItems, setcartItems] = useState(initialCartItem);
  const itemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  useEffect(() => {
    localStorage.setItem("Shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);
  const increas = (id) => {
    let items = cartItems;
    if (items.find((item) => item.id === id)) {
      items = items.map((item) => {
        if (item.id === id) {
          return { id, quantity: item.quantity + 1 };
        } else return item;
      });
    } else items = [...items, { id: id, quantity: 1 }];
    setcartItems(items);
    console.log(cartItems);
  };
  const decreas = (id) => {
    let items = cartItems;
    // if (items.find((item) => item.id === id)) {
    items = items.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return { id, quantity: item.quantity - 1 };
      } else return item;
    });
    items = items.filter((item) => item.quantity !== 0);
    setcartItems(items);
    console.log(cartItems);
  };
  const removeitem = (id) => {
    let items = cartItems;
    items = items.filter((item) => item.id !== id);
    setcartItems(items);
    console.log(cartItems);
  };
  return (
    <Cart.Provider
      value={{ cartItems, itemsQuantity, increas, decreas, removeitem }}
    >
      {children}
    </Cart.Provider>
  );
};
export default CartProvid;

export const UseCartContext = () => {
  return useContext(Cart);
};
