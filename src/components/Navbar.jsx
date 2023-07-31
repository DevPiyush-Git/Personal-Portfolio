import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";
import { Link } from "react-scroll";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };



  return (
    <div
      name="navbar"
      className="fixed mb-10 w-full h-[80px] flex justify-between items-center px-4 sm:py-10 bg-slate-900 text-gray-300"
    >
      <div>
        <Link to="home" smooth={true} duration={500}>
          <h1 className="logo mx-3 text-green-500">P</h1>
        </Link>
      </div>

      <ul className="hidden md:flex justify-between">
        <li className="mx-3 text-xl cursor-pointer hover:text-green-500">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="mx-3 text-xl cursor-pointer hover:text-green-500">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="mx-3 text-xl cursor-pointer hover:text-green-500">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="mx-3 text-xl cursor-pointer hover:text-green-500">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 ">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-slate-900 flex items-center justify-center flex-col"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
