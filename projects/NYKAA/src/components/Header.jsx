import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white border-b p-4 px-8 text-sm font-semibold text-gray-800">
      
     
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-black italic text-[#fc2779]">NYKAA</Link>
        <div className="flex gap-6">
          <Link to="/categories">Categories</Link>
          <Link to="/Products">Products</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/luxe">Luxe</Link>
          <Link to="/fashion">Nykaa Fashion</Link>
          <Link to="/advice">Beauty Advice</Link>
        </div>
      </div>

     
      <div className="flex items-center gap-4">
        <div className="relative flex items-center">
          <FiSearch className="absolute left-3 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search on Nykaa" 
            className="bg-gray-100 rounded-md pl-9 pr-4 py-2 w-64 outline-none font-normal"
          />
        </div>
        
        <button className="bg-[#fc2779] text-white px-4 py-2 rounded-md font-bold">
          Sign in
        </button>

        <Link to="/cart">
          <FiShoppingBag className="text-xl" />
        </Link>
      </div>

    </div>
  );
};

export default Header;