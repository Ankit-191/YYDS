import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Heading from "./common/Heading";
import { faqList } from "./common/Helper";
import { DownArrowIcon } from "./common/Icons";

const Faqs = () => {
  // State to manage which accordion is open
  const [open, setOpen] = useState(0);

  // Function to handle opening/closing accordion
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="max-w-[878px] mx-auto px-3 py-16 md:py-24 lg:pt-[138px] lg:pb-[153px]">
      {/* Heading component */}
      <Heading
        startText="How to Buy "
        endText="$YYDS"
        clasName="mb-5 sm:mb-6 lg:mb-[60px]"
      />

      {/* Mapping through FAQ list */}
      {faqList.map((obj, index) => {
        return (
          <Accordion
            open={open === index} // Set open state based on current index
            icon={<DownArrowIcon id={index} open={open} />} // Pass DownArrowIcon with current index and open state
            key={index} // Unique key for each accordion
            className="mb-4 p-2 sm:py-4 sm:px-4 md:px-6 border border-black rounded-[10px]"
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
  );
};

export default Faqs;
