import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaDribbble,
  FaFacebook,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import Model from "./Model";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModelOpen, setisModelOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", link: "Home" },
    // { path: "/services", link: "Services" },
    { path: "/blogs", link: "Blogs" },
    // { path: "/contact", link: "Contact" },
    // { path: "/about", link: "About" },
  ];
  const openModel = () => {
    setisModelOpen(true);
  };
  const closeModel = () => {
    alert(isModelOpen);
    setisModelOpen(false);
  };
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="px-4 py-6 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          AMA<span className="text-orange-400">PAT</span>
        </a>
        {/* nav items */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white" key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* menu icons */}
        <div className="text-white flex gap-4 items-center ">
          {/* <a href="/" className="hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaTwitter />
          </a> */}
          {/* <button
            onClick={openModel}
            className="bg-orange-500 px-6 py-2 font-medium rounded-lg
           hover:bg-black hover:text-orange-500 transition-all duration-200 ease-in"
          >
            Log in
          </button> */}

          {/* our model componnets */}
          <Model isOpen={isModelOpen} onClose={closeModel} />
          {/* moble  */}

          <div className="md:hidden">
            <button onClick={toggleMenu} className="cursor-pointer">
              {isMenuOpen ? (
                <FaXmark className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150 "
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-black  " key={path}>
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
