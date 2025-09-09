import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaSearch } from "react-icons/fa";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const linkBase =
    "text-gray-600 hover:text-black transition-colors duration-200";
  const activeRoute = (path: string) =>
    location.pathname === path ? "text-black font-semibold" : "";

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-10">
          {/* Center group (logo + links) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
            {/* Logo */}
            <div className="bg-gray-900"></div>
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-full">
              <Link to="/" className="flex items-center">
              <img
                src="../../assets/AppIcon.png"
                alt="CamStore"
                className="max-h-full w-auto object-cover"
              />
            </Link>
            </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/" className={`${linkBase} ${activeRoute("/")}`}>
                Home
              </Link>
              <ScrollLink
                to="products"
                smooth
                duration={1000}
                offset={-80}
                className={`${linkBase} cursor-pointer`}
              >
                Products
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth
                duration={1000}
                offset={-80}
                className={`${linkBase} cursor-pointer`}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="contacts"
                smooth
                duration={1000}
                offset={-80}
                className={`${linkBase} cursor-pointer`}
              >
                Contact
              </ScrollLink>
              <Link
                to="/support"
                className={`${linkBase} ${activeRoute("/support")}`}
              >
                Support
              </Link>
              {/* Search icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
            >
              <FaSearch size={18} />
            </button>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4 ml-auto">
            {/* Search icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden text-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
            >
              <FaSearch size={18} />
            </button>
          {/* Right side: Mobile menu button */}
          <div className="md:hidden ml-auto cursor-pointer">
            <button
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="relative h-2 w-10 grid place-items-center cursor-pointer"
            >
              {/* Hamburger → X */}
              <span
                className={`block h-0.5 w-6 bg-gray-400 transition-all duration-300 ${
                  isOpen ? "translate-y-[7px] rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                  className={`block h-0.5 w-6 bg-gray-400 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
              <span
                className={`block h-0.5 w-6 bg-gray-400 transition-all duration-300 ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Search dropdown */}
      <div
        className={`overflow-hidden transition-all duration-[1000ms] ease-out ${
          searchOpen ? "max-h-50 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 bg-white border-t border-gray-100">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-100"
          />
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-[1000ms] ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col items-center gap-3">
          <Link
            to="/"
            className={`${linkBase} ${activeRoute("/")}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <ScrollLink
            to="products"
            smooth
            duration={1000}
            offset={-80}
            className={`${linkBase} cursor-pointer`}
            onClick={() => setIsOpen(false)}
          >
            Products
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth
            duration={1000}
            offset={-80}
            className={`${linkBase} cursor-pointer`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </ScrollLink>
          <ScrollLink
            to="footer"
            smooth
            duration={1000}
            offset={-80}
            className={`${linkBase} cursor-pointer`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </ScrollLink>
          <Link
            to="/support"
            className={`${linkBase} ${activeRoute("/support")}`}
            onClick={() => setIsOpen(false)}
          >
            Support
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
