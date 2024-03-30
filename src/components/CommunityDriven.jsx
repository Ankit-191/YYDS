import React from "react";
import drivenMovement from "../assets/images/webp/driven-movement.webp";
import Heading from "./common/Heading";
import { OrangeHeading } from "./common/OrangeHeading";
import communityRightImg from "../assets/images/png/community-right-img.png";
import communityLeftImg from "../assets/images/png/community-left-img.png";

const CommunityDriven = () => {
  return (
    <div className="bg-papayaWhip py-12 md:py-24 xl:pb-[26px] xl:pt-[68px] relative">
      {/* Left Image */}
      <img
        src={communityLeftImg}
        alt="left img"
        className="hidden sm:inline-block sm:w-[100px] lg:w-[149px] mix-blend-darken absolute top-[30px] xl:top-[43px] start-4 xl:start-[73px]"
      />
      {/* Right Image */}
      <img
        src={communityRightImg}
        alt="right img"
        className="hidden sm:inline-block sm:w-[100px] lg:w-[175px] absolute top-[30px] xl:top-[90px] end-4 xl:end-[95px]"
      />
      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-3">
        <OrangeHeading text="Our Buidlers" />
        <Heading
          startText="Community Driven "
          endText="Movement"
          clasName="mb-5 md:mb-6 xl:mb-[30px]"
        />
        <img src={drivenMovement} alt="driven" className="w-full" />
      </div>
    </div>
  );
};

export default CommunityDriven;
