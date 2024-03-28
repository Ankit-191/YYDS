import React from "react";
import logo from "../assets/images/png/logo.png";
import { footerLinksList } from "./common/Helper";

const Footer = () => {
  return (
    <>
      {/* Footer container */}
      <div className="py-9 bg-darkCharcoal">
        <div className="max-w-[1164px] mx-auto px-3">
          {/* Footer content layout */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 justify-between">
            {/* Logo and description */}
            <div className="flex items-center text-center md:text-start md:items-end gap-2">
              {/* Logo */}
              <img src={logo} alt="logo" className="w-[103px] h-[119px]" />
              {/* Description */}
              <p className="text-sm sm:text-base opacity-80 text-lightWhite max-w-[256px]">
                $YYDS is a memecoin with no intrinsic value or expectation of
                financial return.
              </p>
            </div>
            {/* Footer links */}
            <ul className="flex gap-3 min-[374px]:gap-6 lg:gap-[42px]">
              {footerLinksList.map((obj, index) => {
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-poppins font-semibold text-sm sm:text-base text-lightWhite opacity-80 hover:text-skyBlue transition-all duration-300 ease-in-out"
                    >
                      {obj.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
