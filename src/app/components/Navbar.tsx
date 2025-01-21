"use client";
import Image from "next/image";
import React, { useState } from "react";
import Navlogo from "../../../public/asserts/Subtract.png";
import Moon from "../../../public/asserts/moon.png";
import Sun from "../../../public/asserts/sun.png";
import Menu from "../../../public/asserts/menu.png";
import Cross from "../../../public/asserts/cross.png";

const Navbar = ({ isDark , setIsDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="w-full flex justify-around items-center mt-4 md:mt-[41px]">
      <a href="#top">
        <div className="flex justify-center items-center">
          <Image
            src={Navlogo}
            alt="mumair"
            className="w-[34px] md:w-[67px] h-[34px] md:h-[67px] cursor-pointer mr-1 md:mr-4"
          />
          <h1 className="text-xl md:text-3xl">
            <span className="font-medium text-2xl md:text-5xl">M</span>umair
          </h1>
        </div>
      </a>
      {/* Large Device Menu */}
      <ul className="hidden md:flex justify-between items-center gap-10">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <button onClick={toggleDarkMode} className="flex items-center">
          <Image
            src={isDark ? Sun : Moon}
            alt={isDark ? "dark-mood-on" : "light-mood-on"}
            className="w-7"
          />
        </button>
        <a
          className="p-2 bg-[#FD6F00] rounded-sm text-white"
          href="https://drive.google.com/uc?export=download&id=1t_Eq3_mRWqFta2GfVGtF6wF3RBfyXLnz"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </ul>

      {/* Small Device Buttons */}
      <div className="flex md:hidden">
        <button onClick={toggleDarkMode}>
          <Image
            src={isDark ? Sun : Moon}
            alt={isDark ? "dark-mood-on" : "light-mood-on"}
            className="w-7"
          />
        </button>
        <button onClick={toggleMenu}>
          <Image src={Menu} alt="Menu" className="w-7" />
        </button>
      </div>

      {/* Small Device Menu */}
      <ul
        className={`md:hidden flex flex-col gap-4 pt-10 p-7 text-sm fixed top-0 bottom-0 w-44 z-50 h-screen bg-orange-50 dark:bg-[#222222] transition-transform duration-500 ${
          menuOpen ? "right-0" : "-right-44"
        }`}
      >
        <div className="absolute right-6 top-6">
          <Image
            src={Cross}
            alt="Close Menu"
            className="w-5 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <li>
          <a href="#top" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>
            About Me
          </a>
        </li>
        <li>
          <a href="#services" onClick={toggleMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#testimonials" onClick={toggleMenu}>
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </li>
        <a
          className="p-2 bg-[#FD6F00] rounded-sm text-white"
          href="https://drive.google.com/uc?export=download&id=1t_Eq3_mRWqFta2GfVGtF6wF3RBfyXLnz"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
