import React from "react";
import { OrangeHeading } from "./common/OrangeHeading";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";
import foundation from "../assets/images/png/foundation.png";
import unleashingCreativity from "../assets/images/png/unleashing-creativity.png";
import buildingMomentum from "../assets/images/png/building-momentum.png";

const Roadmap = () => {
  return (
    <div className="max-w-[1164px] mx-auto px-3 py-20">
      {/* Orange heading component */}
      <OrangeHeading text="Roadmap" />

      {/* Heading component */}
      <Heading
        startText="Pathway to "
        endText="Progress"
        clasName="mb-6 sm:mb-8 md:mb-14"
      />

      <div className="relative">
        {/* Vertical line */}
        <div className="h-[97%] sm:h-full xl:h-[90%] w-[4px] bg-black absolute top-[3%] sm:top-0 xl:top-[3%] start-0 sm:start-1/2 sm:-translate-x-1/2"></div>

        {/* First roadmap item */}
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full justify-end sm:justify-start sm:w-1/2 flex items-center relative">
            <img
              src={foundation}
              alt="foundation"
              className="mix-blend-darken w-full max-w-[150px] lg:max-w-[220px] xl:max-w-[288px]"
            />
            <div className="p-3 md:p-5 border border-black rounded-[10px] font-indieFlower text-3xl md:text-5xl text-saffron max-w-[100px] md:max-w-[130px] lg:max-w-[187px] w-full text-center start-[20px] sm:start-auto sm:end-[50px] md:end-[94px] absolute after:content-[''] after:absolute after:start-[-20px] sm:after:start-auto sm:after:end-[-50px] md:after:end-[-94px] after:top-1/2 after:-translate-y-1/2 after:bg-black after:w-[20px] sm:after:w-[50px] md:after:w-[94px] after:h-[4px] before:content-[''] before:absolute before:w-[16px] sm:before:w-[26px] before:h-[16px] sm:before:h-[26px] before:rounded-full before:bg-white before:border-[2px] sm:before:border-[3px] before:border-black before:top-1/2 before:start-[-27px] sm:before:start-auto sm:before:end-[-63px] md:before:end-[-107px] before:-translate-y-1/2 before:z-[1]">
              2023
            </div>
          </div>
          <div className="w-full sm:w-1/2 ps-5 md:ps-10 mt-4 sm:mt-0">
            <div className="max-w-[529px] p-3 lg:p-5 border border-black rounded-[10px] hover:-translate-y-1 hover:shadow-[0px_0px_10px] hover:shadow-[#38A24A] transition-all duration-300 ease-in-out">
              <h6 className="font-indieFlower text_border_half text-lightBlack text-2xl mb-1 lg:mb-2">
                Foundation
              </h6>
              <Paragraph text="In the Foundation phase, we're laying the groundwork for Memes Coin's journey. Our team is hard at work, refining the concept that merges the worlds of memes and cryptocurrency." />
            </div>
          </div>
        </div>

        {/* Second roadmap item */}
        <div className="flex flex-wrap flex-col-reverse sm:flex-row justify-between items-center mt-4">
          <div className="w-full sm:w-1/2 ps-5 sm:ps-0 sm:pe-5 md:pe-10 mt-4 sm:mt-0">
            <div className="max-w-[529px] p-3 lg:p-5 border border-black rounded-[10px] hover:-translate-y-1 hover:shadow-[0px_0px_10px] hover:shadow-gray transition-all duration-300 ease-in-out">
              <h6 className="font-indieFlower text_border_half text-lightBlack text-2xl mb-1 lg:mb-2">
                Building Momentum
              </h6>
              <Paragraph text="During the Building Momentum phase, our vision starts to take shape.  Our community of skilled artist, meme creators and developers crafting a unique culture fostering creativity and innovation based on the principle of FAFO (fuck around and find out) all driven by the DAO members and community contributions" />
            </div>
          </div>
          <div className="w-full justify-end sm:w-1/2 flex items-center relative">
            <img
              src={buildingMomentum}
              alt="foundation"
              className="mix-blend-darken w-full max-w-[150px] lg:max-w-[220px] xl:max-w-[288px]"
            />
            <div className="p-3 md:p-5 border border-black rounded-[10px] font-indieFlower text-3xl md:text-5xl text-saffron max-w-[100px] md:max-w-[130px] lg:max-w-[187px] w-full text-center start-[20px] sm:start-[50px] md:start-[94px] absolute after:content-[''] after:absolute after:start-[-20px] sm:after:start-[-50px] md:after:start-[-94px] after:top-1/2 after:-translate-y-1/2 after:bg-black after:w-[20px] sm:after:w-[50px] md:after:w-[94px] after:h-[4px] before:content-[''] before:absolute before:w-[16px] sm:before:w-[26px] before:h-[16px] sm:before:h-[26px] before:rounded-full before:bg-white before:border-[2px] sm:before:border-[3px] before:border-black before:top-1/2 before:start-[-27px] sm:before:start-auto sm:before:start-[-63px] md:before:start-[-107px] before:-translate-y-1/2 before:z-[1]">
              2024
            </div>
          </div>
        </div>

        {/* Third roadmap item */}
        <div className="flex flex-wrap justify-between items-center mt-4">
          <div className="w-full justify-end sm:justify-start sm:w-1/2 flex items-center relative">
            <img
              src={unleashingCreativity}
              alt="foundation"
              className="mix-blend-darken w-full max-w-[150px] lg:max-w-[220px] xl:max-w-[288px]"
            />
            <div className="p-3 md:p-5 border border-black rounded-[10px] font-indieFlower text-3xl md:text-5xl text-saffron max-w-[100px] md:max-w-[130px] lg:max-w-[187px] w-full text-center start-[20px] sm:start-auto sm:end-[50px] md:end-[94px] absolute after:content-[''] after:absolute after:start-[-20px] sm:after:start-auto sm:after:end-[-50px] md:after:end-[-94px] after:top-1/2 after:-translate-y-1/2 after:bg-black after:w-[20px] sm:after:w-[50px] md:after:w-[94px] after:h-[4px] before:content-[''] before:absolute before:w-[16px] sm:before:w-[26px] before:h-[16px] sm:before:h-[26px] before:rounded-full before:bg-white before:border-[2px] sm:before:border-[3px] before:border-black before:top-1/2 before:start-[-27px] sm:before:start-auto sm:before:end-[-63px] md:before:end-[-107px] before:-translate-y-1/2 before:z-[1]">
              2025
            </div>
          </div>
          <div className="w-full sm:w-1/2 ps-5 md:ps-10 mt-4 sm:mt-0">
            <div className="max-w-[529px] p-3 lg:p-5 border border-black rounded-[10px] hover:-translate-y-1 hover:shadow-[0px_0px_10px] hover:shadow-[#F4B03B] transition-all duration-300 ease-in-out">
              <h6 className="font-indieFlower text_border_half text-lightBlack text-2xl mb-1 lg:mb-2">
                Unleashing Creativity
              </h6>
              <Paragraph text="Unleashing Creativity is our focus as the culture expands to all corners of web3 supported by a robust Buidler DAO." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
