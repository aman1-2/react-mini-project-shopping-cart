import React from 'react'
import Logo from '../Assets/logo.png';
import { NavLink } from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux';

export const Navbar = () => {
  //For showcasing the floating number at the cart.
  const {cart}=useSelector((state)=>state);
  return (
    <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to={"/"}>
            <img src={Logo} alt="Logo" className="h-14 ml-5"></img>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to={"/"} >
            <span>Home</span>
          </NavLink>

          <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
              </div>
            </NavLink>

        </div>
    </nav>
  )
}
