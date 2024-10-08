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
      <nav className="bg-[#ea8a2a] p-4 font-serif">
        <div className=" flex items-center justify-between">
          {/* Logo Placeholder */}
          <div className="flex items-center lg:w-1/12">
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/Untitled%20design.png"
              alt="logo"
              className="w-1/2 lg:w-full"
            />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="block lg:hidden ">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
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
          <div className="hidden lg:flex space-x-4 items-center justify-center text-xl w-10/12">
            <a
              href="#"
              className="text-[#7a38f3] font-bold hover:bg-[#efd93c] py-3 px-4 rounded-md"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[#7a38f3] font-bold hover:bg-[#efd93c] py-3 px-4 rounded-md"
            >
              Short Term Courses
            </a>
            <a
              href="#"
              className="text-[#7a38f3] font-bold hover:bg-[#efd93c] py-3 px-4 rounded-md"
            >
              Art Promotion
            </a>
            <a
              href="#"
              className="text-[#7a38f3] font-bold hover:bg-[#efd93c] py-3 px-4 rounded-md"
            >
              Co-Working Space
            </a>
            <a
              href="#"
              className="text-[#7a38f3] font-bold hover:bg-[#efd93c] py-3 px-4 rounded-md"
            >
              Workshops
            </a>
            <a
              href="#"
              className="text-[#7a38f3] font-bold hover:bg-[#efd93c] py-3 px-4 rounded-md"
            >
              Events
            </a>
          </div>

          {/* Contact Us Button */}
          <div className="hidden lg:block w-1/12 text-end">
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
                className="text-[#7a38f3] font-bold bg-[#efd93c] py-3 px-4 rounded-md"
              >
                Home
              </a>
              <a
                href="#"
                onClick={closeMenu}
                className="text-[#7a38f3] font-bold bg-[#efd93c] py-3 px-4 rounded-md"
              >
                Short Term Courses
              </a>
              <a
                href="#"
                onClick={closeMenu}
                className="text-[#7a38f3] font-bold bg-[#efd93c] py-3 px-4 rounded-md"
              >
                Art Promotion
              </a>
              <a
                href="#"
                onClick={closeMenu}
                className="text-[#7a38f3] font-bold bg-[#efd93c] py-3 px-4 rounded-md"
              >
                Co-Working Space
              </a>
              <a
                href="#"
                onClick={closeMenu}
                className="text-[#7a38f3] font-bold bg-[#efd93c] py-3 px-4 rounded-md"
              >
                Workshops
              </a>
              <a
                href="#"
                onClick={closeMenu}
                className="text-[#7a38f3] font-bold bg-[#efd93c] py-3 px-4 rounded-md"
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
