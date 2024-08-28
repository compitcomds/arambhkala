"use client"; // Add this line at the very top

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-[#ea8a2a] p-4">
        <div className=" flex items-center justify-between">
          {/* Logo Placeholder */}
          <div className="flex items-center justify-center">
            <img
              src="https://placehold.co/100x70"
              alt="logo"
              className="bg-gray-200"
            />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#7036db] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <div className="hidden lg:flex space-x-8 text-xl">
            <a
              href="#"
              className="text-purple-600 font-bold hover:bg-[#efd93c] py-3 px-4 rounded-md"
            >
              Home
            </a>
            <a
              href="#"
              className="text-purple-600 font-bold hover:bg-[#efd93c] py-3 px-4 rounded-md"
            >
              Short Term Courses
            </a>
            <a
              href="#"
              className="text-purple-600 font-bold hover:bg-[#efd93c] py-3 px-4 rounded-md"
            >
              Art Promotion
            </a>
            <a
              href="#"
              className="text-purple-600 font-bold hover:bg-[#efd93c] py-3 px-4 rounded-md"
            >
              Co-Working Space
            </a>
            <a
              href="#"
              className="text-purple-600 font-bold hover:bg-[#efd93c] py-3 px-4 rounded-md"
            >
              Workshops
            </a>
            <a
              href="#"
              className="text-purple-600 font-bold hover:bg-[#efd93c] py-3 px-4 rounded-md"
            >
              Events
            </a>
          </div>

          {/* Contact Us Button */}
          <div className="hidden lg:block">
            <a
              href="#"
              className="bg-blue-500 text-white font-bold px-4 py-3 rounded hover:bg-blue-600"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4">
            <div className="flex flex-col space-y-2 text-xl">
              <a
                href="#"
                onClick={closeMenu}
                className="text-purple-600 font-bold bg-[#efd93c] py-3 px-4 rounded-md"
              >
                Home
              </a>
              <a
                href="#"
                onClick={closeMenu}
                className="text-purple-600 font-bold bg-[#efd93c] py-3 px-4 rounded-md"
              >
                Short Term Courses
              </a>
              <a
                href="#"
                onClick={closeMenu}
                className="text-purple-600 font-bold bg-[#efd93c] py-3 px-4 rounded-md"
              >
                Art Promotion
              </a>
              <a
                href="#"
                onClick={closeMenu}
                className="text-purple-600 font-bold bg-[#efd93c] py-3 px-4 rounded-md"
              >
                Co-Working Space
              </a>
              <a
                href="#"
                onClick={closeMenu}
                className="text-purple-600 font-bold bg-[#efd93c] py-3 px-4 rounded-md"
              >
                Workshops
              </a>
              <a
                href="#"
                onClick={closeMenu}
                className="text-purple-600 font-bold bg-[#efd93c] py-3 px-4 rounded-md"
              >
                Events
              </a>
              <a
                href="#"
                onClick={closeMenu}
                className="bg-blue-500 text-white font-bold px-4 py-3 rounded hover:bg-blue-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
