import React from "react";

const Paragraph = ({ text, className }) => {
  return (
    <>
      <p
        className={`font-poppins text-sm md:text-base text-black opacity-60 ${className}`}
      >
        {text}
      </p>
    </>
  );
};

export default Paragraph;
