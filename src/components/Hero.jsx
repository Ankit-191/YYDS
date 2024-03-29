import React from "react";
import Header from "./Header";
import Paragraph from "./common/Paragraph";
import CommonButton from "./common/CommonButton";
import heroImg from "../assets/images/png/hero-img.png";
import circleImg from "../assets/images/png/hero-circle.png";
import rightSideImg from "../assets/images/png/hero-right-side-img.png";
import leftSideImg from "../assets/images/png/hero-left-side-img.png";
import lineImg from "../assets/images/png/hero-right-top-line.png";
const Hero = () => {
  return (
    <div className="md:h-screen flex flex-col">
      <Header />
      <div className="grow py-12 relative">
        <img
          src={leftSideImg}
          alt="leftSideImg"
          className="w-[100px] sm:w-[150px] xl:w-[206px] mix-blend-darken absolute start-0 top-[5%]"
        />
        <img
          src={rightSideImg}
          alt="rightSideImg"
          className="w-[100px] sm:w-[200px] xl:w-[254px] mix-blend-darken absolute end-0 bottom-[-50px] sm:bottom-[-100px] md:bottom-[-150px] xl:bottom-[-218px]"
        />
        <img
          src={lineImg}
          alt="lineImg"
          className="absolute top-[31px] end-2 xl:end-[52px] hidden md:inline-block md:w-[170px] xl:w-[213px]"
        />
        <p className="font-poppins text-4xl md:text-[72px] text_border_half text-[#FF0000] absolute top-[10px] md:top-[61px] start-[30%] rotate-[11deg]">
          财神
        </p>
        <div className="max-w-[1164px] mx-auto px-3 h-full flex items-center">
          <div className="flex flex-wrap items-center justify-center md:justify-start">
            <div className="w-full sm:w-8/12 md:w-1/2 text-center md:text-start">
              <h1 className="font-indieFlower font-bold text_border_half text-[36px] sm:text-[46px] lg:text-[56px] xl:text-7xl leading-[138%]">
                Laughing All the Way to the Coin Bank
              </h1>
              <Paragraph
                className="lg:pe-10"
                text="Welcome to YYDS, where the world of numismatics meets the realm of laughter."
              />
              <div className="flex gap-3 sm:gap-6 justify-center md:justify-start mt-7">
                <CommonButton text="Buy Token" />
                <CommonButton className="underline" text="Our Telegram" />
              </div>
            </div>
            <div className="w-full sm:w-9/12 md:w-1/2 px-10 xl:px-2 relative">
              <img src={heroImg} alt="heroImg" className="w-full" />
              <img
                src={circleImg}
                alt="circleImg"
                className="absolute mix-blend-darken w-[90px] sm:w-[140px] lg:w-[167px] xl:w-[195px] bottom-[-4px] sm:bottom-[-18px] md:bottom-[-58px] lg:bottom-[-35px] xl:bottom-[-25px] start-[-17px] sm:start-[-50px] md:start-[-58px] lg:start-[-73px] xl:start-[-133px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
