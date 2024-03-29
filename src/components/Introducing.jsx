import React from "react";
import { OrangeHeading } from "./common/OrangeHeading";
import Paragraph from "./common/Paragraph";
import Heading from "./common/Heading";
import CommonButton from "./common/CommonButton";
import rightImg from "../assets/images/png/about-us-right-img.png";
import leftImg from "../assets/images/png/about-us-left-img.png";

const Introducing = () => {
  return (
    <div className="relative py-12 md:py-24 lg:pb-[105px] lg:pt-[130px]">
      <img
        src={rightImg}
        alt="rightImg"
        className="w-[100px] md:w-[150px] lg:w-[220px] xl:w-[312px] absolute bottom-[40px] md:bottom-[82px] end-[32px] hidden sm:inline-block"
      />
      <img
        src={leftImg}
        alt="rightImg"
        className="w-[100px] md:w-[150px] lg:w-[220px] xl:w-[375px] mix-blend-darken absolute top-3 xl:top-[79px] start-0 hidden sm:inline-block"
      />
      <div className="max-w-[705px] mx-auto px-3">
        <OrangeHeading text="About Us" />
        <Heading
          startText="Introducing "
          endText="$YYDS"
          clasName="mb-5 md:mb-6"
        />
        <Paragraph
          className="text-center mb-2 md:mb-1"
          text="In the meme universe, 财神YYDS, born from '永远的神' and traditional 财神, wielded his 富贵宝鼎 to spread enduring humor and positivity, undeterred by Trolls, championing the eternal value of joy. "
        />
        <Paragraph
          className="text-center max-w-[638px] mx-auto lg:px-[7px]"
          text="This meme deity was no ordinary figure; he symbolized not just material affluence, but also a treasure trove of positivity, humor, and good vibes. The birth of 财神YYDS marked a rare event. While most memes experienced fleeting popularity, 财神YYDS, drawing from the essence of '永远的神' or 'forever god-like', merged with the time-honored 财神 to stand eternal, continuously cherished by meme aficionados."
        />
        <div className="flex justify-center border-b border-b-black py-4 md:pb-6 md:pt-10 max-w-[606px] mx-auto">
          <CommonButton text="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default Introducing;
