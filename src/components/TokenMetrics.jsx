import React from "react";
import tokenMetrics from "../assets/images/png/token-metrics.png";
import { OrangeHeading } from "./common/OrangeHeading";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";
import rightSideImg from "../assets/images/png/token-right-side-img.png";
import { TokenMetricsHash } from "./common/Icons";

const TokenMetrics = () => {
  return (
    <div className="bg-papayaWhip py-12 md:py-24 xl:py-[94px] relative after:content-['代币经济学'] after:text-[#6F4136] after:font-indieFlower after:text_border_half after:text-2xl sm:after:text-3xl md:after:text-5xxl after:absolute after:top-[40px] sm:after:top-[50px] md:after:top-[80px] lg:after:top-[100px] after:start-1 lg:after:start-[51px] after:rotate-[-28deg]">
      {/* Right Side Image */}
      <img
        src={rightSideImg}
        alt="right side"
        className="w-[170px] lg:w-[244px] xl:w-[294px] absolute top-[10px] md:top-[56px] end-0 hidden sm:inline-block"
      />
      <div className="max-w-[1205px] mx-auto px-3">
        <div className="flex justify-center md:justify-end items-center flex-wrap">
          {/* Token Metrics Image */}
          <div className="w-full sm:w-7/12 md:w-[43%] lg:w-5/12 sm:ps-3 sm:pe-3 lg:pe-[100px] xl:pe-[116px]">
            <img
              src={tokenMetrics}
              alt="tokenMetrics"
              className="w-full max-w-[374px] mx-auto"
            />
            <span className="absolute start-4  lg:start-[67px] hidden sm:inline-block">
              <TokenMetricsHash />
            </span>
          </div>
          {/* Token Metrics Content */}
          <div className="w-full md:w-[57%] lg:w-6/12 sm:px-3 mt-7 md:mt-0">
            <OrangeHeading text="Tokenomics" clasName="md:text-start" />
            <Heading
              startText="Token"
              endText="Metrics"
              clasName="md:text-start"
            />
            {/* CEX Liquidity */}
            <div className="flex justify-center md:justify-start gap-2 md:gap-4 mt-5 md:mt-[30px] mb-1 md:mb-3">
              <div className="w-[31px] h-[20px] md:w-[41px] md:h-[30px] rounded-[4px] bg-pastedOrange"></div>
              <p className="font-indieFlower text_border_half text-lg md:text-2xl text-lightBlack">
                10% CEX Liquidity
              </p>
            </div>
            {/* DEX Liquidity */}
            <div className="flex justify-center md:justify-start gap-2 md:gap-4 mb-3 md:mb-5">
              <div className="w-[31px] h-[20px] md:w-[41px] md:h-[30px] rounded-[4px] bg-racingRed"></div>
              <p className="font-indieFlower text_border_half text-lg md:text-2xl text-lightBlack">
                90% DEX Liquidity
              </p>
            </div>
            {/* Tokenomics Paragraph */}
            <Paragraph
              className="text-center md:text-start"
              text="Welcome to the heart of our Meme Coin ecosystem, where creativity meets innovation. Our tokenomics is designed to bring a wave of excitement to the world of cryptocurrency, reshaping the landscape of how memes are not only shared, but valued."
            />
            {/* Ecosystem Section */}
            <div className="rounded-[14px] text-center md:text-start border-[1.5px] border-black p-2 sm:p-3 lg:py-[17px] lg:px-[22px] bg-[#F4B03B57] mt-3 md:mt-5">
              <h6 className="font-poppins font-semibold text-lg md:text-xl text-lightBlack opacity-80">
                Ecosystem
              </h6>
              <p className="font-poppins font-medium text-sm md:text-lg text-lightBlack opacity-80 py-1 md:py-[10px]">
                Tax Buy 1%/Sell 1%, Contract Renounced / LP Locked
              </p>
              <Paragraph
                className="opacity-80"
                text="All taxes deposited in community directed DAO where anyone can submit proposals and DAO token holders can vote on allocations."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenMetrics;
