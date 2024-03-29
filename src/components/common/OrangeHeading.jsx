import React from "react";

export const OrangeHeading = ({ text, clasName }) => {
  return (
    <>
      <h4
        className={`font-indieFlower text-lg md:text-2xl text-saffron text-center ${clasName}`}
      >
        {text}
      </h4>
    </>
  );
};
