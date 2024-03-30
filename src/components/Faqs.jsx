import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Heading from "./common/Heading";
import { faqList } from "./common/Helper";
import { DownArrowIcon } from "./common/Icons";
import faqLeftImg from "../assets/images/png/faq-left-img.png";
import faqRightImg from "../assets/images/png/faq-right-img.png";
const Faqs = () => {
  // State to manage which accordion is open
  const [open, setOpen] = useState(0);

  // Function to handle opening/closing accordion
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="relative py-12 md:py-24 xl:pt-[138px] xl:pb-[189px]">
      {/* Faq left side image */}
      <img
        src={faqLeftImg}
        alt="left img"
        className="hidden sm:inline-block absolute top-1 lg:top-[17px] xl:top-[40px] start-1 lg:start-[17px] xl:start-[49px] w-[60px] lg:w-[110px] xl:w-[176px] mix-blend-darken"
      />
      {/* Faq right side image */}
      <img
        src={faqRightImg}
        alt="left img"
        className="hidden sm:inline-block absolute bottom-1 lg:bottom-[17px] xl:bottom-[57px] end-1 lg:end-[17px] w-[60px] lg:w-[80px] xl:w-[196px] mix-blend-darken"
      />
      <div className="max-w-[878px] mx-auto px-3">
        {/* Heading component */}
        <Heading
          startText="How to Buy "
          endText="$YYDS"
          clasName="mb-5 md:mb-6 xl:mb-[60px]"
        />

        {/* Mapping through FAQ list */}
        {faqList.map((obj, index) => {
          return (
            <Accordion
              open={open === index} // Set open state based on current index
              icon={<DownArrowIcon id={index} open={open} />} // Pass DownArrowIcon with current index and open state
              key={index} // Unique key for each accordion
              className={`mb-3 md:mb-4 xl:mb-5 p-2 sm:py-4 sm:px-4 md:px-6 border border-black rounded-[10px] ${obj.clasName}`}
            >
              {/* Accordion header */}
              <AccordionHeader
                onClick={() => handleOpen(index)} // Handle click event to open/close accordion
                className="font-indieFlower text_border_half text-lg sm:text-2xxl text-black opacity-70 py-0 border-0"
              >
                {obj.title}
              </AccordionHeader>

              {/* Accordion body */}
              <AccordionBody className="font-indieFlower text_border_half text-sm sm:text-base text-black opacity-70 py-0 mt-1 sm:mt-2">
                {obj.description}
              </AccordionBody>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
