import React from "react";
const Heading = ({ startText, endText, clasName }) => {
  return (
    <>
      <h2
        className={`font-indieFlower text_border_half text-3xl md:text-5xl text-lightBlack text-center ${clasName}`}
      >
        {startText}
        <span className="relative after:content-[''] after:absolute after:w-full after:bg- [url(/src/assets/images/svg/line-blue.svg)] after:bg-no-repeat after:bg-100 after:h-1 after:start-0 after:bottom-0">
          {endText}
        </span>
      </h2>
    </>
  );
};

export default Heading;
