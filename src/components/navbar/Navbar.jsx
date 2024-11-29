import React from "react";
import { Link } from "react-router";
import { IoRocket } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg z-50">
      <div className="container mx-auto px-5 py-3 lg:px-20 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <IoRocket className="mr-2 " /> Trivia Q&A
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link to="/terms" className="hover:text-blue-200 transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
