import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-200/80 py-3 sm:py-4 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="#home" className="inline-block flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-5 lg:space-x-8">
          {["Home", "About", "Services", "Skills", "Project", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative inline-block text-gray-800 font-semibold text-sm lg:text-base transition duration-300 hover:text-purple group"
              >
                <span className="relative inline-block">
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            )
          )}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(false)}
              className="text-2xl cursor-pointer text-gray-900"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl cursor-pointer text-gray-900"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden mt-3 bg-white border border-gray-200 shadow-2xl rounded-2xl p-6 flex flex-col space-y-5 text-center justify-center max-h-[85vh] overflow-y-auto">
          {["Home", "About", "Services", "Skills", "Project", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setShowMenu(false)}
                className="text-gray-900 font-semibold text-lg hover:text-purple transition py-1"
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
