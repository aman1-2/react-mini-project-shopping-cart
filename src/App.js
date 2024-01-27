import React from 'react';
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Navbar } from "./Components/Navbar";
import { Route,Routes } from "react-router";
function App() {
  return (
    <div>
      
      <div className="bg-slate-900">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
