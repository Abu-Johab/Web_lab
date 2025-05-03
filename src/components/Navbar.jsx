import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed w-full bg-black bg-opacity-80 backdrop-blur z-10 px-8 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-white text-2xl font-bold tracking-wide">Forbes</h1>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/billionaires" className="text-white hover:text-gray-300">Real-Time Billionaires</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
