import React, { useState } from "react";

import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ToggleSwitch from "./ToggleSwitch";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex bg-white text-gray-800 shadow-md px-5 py-3 mx-24  items-center justify-between">
      <div>
      <Link to="/" className="hover:text-orange-500 transition-colors">
      <img className="w-28 h-auto" src={LOGO_URL} alt="logo" />
          </Link>
        </div>
    <div className="flex">
          
        
        <ul className="flex space-x-4 items-center">
        
        
        <li>
          <Link to="/" className="hover:text-orange-500 transition-colors">
            Home

          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-500 transition-colors">
            About Us
            
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-orange-500 transition-colors"
          >
            Contact Us
          </Link>
        </li>
        <li>Cart</li>

        <li>
          <Link
            to="/lazyLoadingComponent"
            className="hover:text-orange-500 transition-colors"
          >
            LazyLoadingComponent
          </Link>
        </li>
        <li>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </li>
        <li>Online {onlineStatus ? "✅" : "❌"}</li>
      </ul>
    </div>
    </div>
  );
};

export default Header;
