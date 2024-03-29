import React from "react";
import drivenMovement from "../assets/images/png/driven-movement.png";
import Heading from "./common/Heading";
import { OrangeHeading } from "./common/OrangeHeading";
const CommunityDriven = () => {
  return (
    <>
      <div className="bg-papayaWhip pb-7 pt-20">
        <div className="max-w-[1200px] mx-auto px-3">
          <OrangeHeading text="Our Buidlers" />
          <Heading
            startText="Community Driven "
            endText="Movement"
            clasName="mb-[30px]"
          />
          <img src={drivenMovement} alt="driven" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default CommunityDriven;
