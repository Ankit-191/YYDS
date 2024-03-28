import React, { useEffect, useState } from "react";
import logo from "../assets/images/png/logo-yyds.png";
import { navLinksList, navSocialIconsList } from "./common/Helper";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  // State to manage whether the navigation menu is shown or hidden
  const [navShow, setNavShow] = useState(false);

  // Function to toggle the navigation menu visibility
  const showNavHandler = () => {
    setNavShow(!navShow);
  };

  // Effect to handle body overflow based on navigation menu visibility
  useEffect(() => {
    // Function to set body overflow style based on navShow state
    const handleBodyOverflow = () => {
      document.body.style.overflow = navShow ? "hidden" : "unset";
    };

    // Call handleBodyOverflow function to set initial body overflow style
    handleBodyOverflow();

    // Cleanup function to reset body overflow style when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navShow]);

  return (
    <>
      <header className="py-4 border-b border-b-black">
        <div className="max-w-[1164px] mx-auto px-3">
          <div className="flex justify-between">
            {/* Logo */}
            <a href="#" className="cursor-pointer">
              <img src={logo} alt="logo" className="w-[129px] h-[68px]" />
            </a>

            {/* Navigation Links */}
            <ul
              onClick={() => setNavShow(false)}
              className={`flex gap-12 sm:gap-5 md:gap-[42px] items-center flex-col absolute z-[9] top-0 bg-papayaWhip w-full h-screen justify-center transition-all duration-300 ease-in-out sm:justify-start sm:bg-transparent sm:h-auto sm:w-auto sm:flex-row sm:sticky ${
                navShow ? "start-0" : "-start-[100%]"
              }`}
            >
              {/* Iterate over navigation links and render them */}
              {navLinksList.map((obj, index) => {
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-poppins font-semibold text-xl sm:text-base text-black opacity-60 hover:text-skyBlue transition-all duration-300 ease-in-out"
                    >
                      {obj.title}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Social Icons */}
            <ul className="flex gap-3 items-center">
              {/* Iterate over social icons and render them */}
              {navSocialIconsList.map((obj, index) => {
                return (
                  <li key={index}>
                    <a
                      href={obj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={obj.icon}
                        alt={obj.alt}
                        className="w-[32px] cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                    </a>
                  </li>
                );
              })}

              {/* Toggle Button for Mobile */}
              <li className="sm:hidden relative z-10" onClick={showNavHandler}>
                {/* Show 'X' icon if navShow is true, otherwise show menu icon */}
                {navShow ? (
                  <FiX className="text-black text-3xl opacity-60" />
                ) : (
                  <FiMenu className="text-black text-3xl opacity-60" />
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
