import { Link } from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { UseCartContext } from "../Context/cartContext";
const Nav = () => {
  const { cartItems } = UseCartContext();
  return (
    <div className="bg-white sticky  top-0 mb-3 shadow-sm ">
      <div className="container flex justify-between py-1 px-3 items-center ">
        <ul className="flex ">
          <li className="mr-6">
            <Link className="text-blue-500 hover:text-blue-800" to="/">
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-blue-500 hover:text-blue-800" to="/Store">
              Store
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-blue-500 hover:text-blue-800" to="/About">
              About
            </Link>
          </li>
        </ul>
        <Link to="/Side">
          <button className="bg-blue-500 hover:bg-blue-800 text-white relative   w-10 h-10 rounded-full flex justify-center items-center">
            <MdOutlineLocalGroceryStore size={20} />
            {cartItems.length ? (
              <div className="absolute bottom-0 right-0 translate-x-[25%] translate-y-[25%] rounded-full bg-red-500 text-xs w-[1.2rem] h-[1.2rem] flex justify-center items-center hover:text-white ">
                {cartItems.length}
              </div>
            ) : null}
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Nav;
