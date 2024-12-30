import React, { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <span className="text-3xl text-black">
            <Link
                to="/"
                className=""
              >PEARLS DENTAL </Link></span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6 ">
            <li>
              <Link
                to="/aboutus"
                className="hover:text-yellow-400 transition-colors duration-200 p-2"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-yellow-400 transition-colors duration-200 p-2"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/warranty"
                className="hover:text-yellow-400 transition-colors duration-200 p-2"
              >
                Warranty
              </Link>
            </li>
            <li>
              <Link
                to="/newpatients"
                className="hover:text-yellow-400 transition-colors duration-200 p-2"
              >
                New Patients
              </Link>
            </li>
            
            <li>
              <Link
                to="/contactus"
                className="hover:text-yellow-400 transition-colors duration-200 p-2"
              >
                Contact Us
              </Link>
            </li>
            <li>
            <Link
              to="/contactus"
              className="hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <button  className="bg-yellow-400 text-black p-2 ">Book Online</button>
            </Link>
          </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden  focus:outline-none"
          onClick={toggleMenu}
        >
          <p className="text-black">Menu</p>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-800 py-4`}
      >
        <ul className="space-y-4 px-6">
          <li>
            <Link
              to="/aboutus"
              className="hover:text-yellow-400 transition-colors duration-200 p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-yellow-400 transition-colors duration-200 p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/warranty"
              className="hover:text-yellow-400 transition-colors duration-200 p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Warranty
            </Link>
          </li>
          <li>
            <Link
              to="newpatient"
              className="hover:text-yellow-400 transition-colors duration-200 p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              New Patients
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="hover:text-yellow-400 transition-colors duration-200 p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="bg-yellow-400 text-black p-2">Book Online</button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
