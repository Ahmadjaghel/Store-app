import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Store from "./Components/Store";
import About from "./Components/About";
import Nav from "./Components/Nav";
import Sidebar from "./Components/Sidebar";
import CartProvid from "./Context/cartContext";
function App() {
  return (
    <CartProvid>
      <div className=" bg-slate-100">
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/Store" Component={Store} />
            <Route path="/About" Component={About} />
            <Route path="/Side" Component={Sidebar} />
          </Routes>
        </div>
      </div>
    </CartProvid>
  );
}

export default App;
