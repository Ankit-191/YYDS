import React from "react";
const Heading = ({ startText, endText, clasName }) => {
  return (
    <>
      <h2
        className={`font-indieFlower font-bold text-3xl sm:text-5xl text-lightBlack text-center ${clasName}`}
      >
        {startText}
        <span className="relative after:content-[''] after:absolute after:w-full after:bg- [url(/src/assets/images/svg/line-blue.svg)] after:bg-no-repeat after:bg-100 after:h-1 after:start-0 after:bottom-0 ms-2">
          {endText}
        </span>
      </h2>
    </>
  );
};

export default Heading;
