import React from "react";

const CommonButton = ({ text, className }) => {
  return (
    <button
      className={`font-indieFlower text_border_half text-xl bg-[url(/src/assets/images/png/button-img.png)] bg-100 bg-no-repeat w-[140px] sm:w-[150px] xl:w-[200px] h-[60px] sm:h-[65px] xl:h-[78px] relative after:content-[''] after:start-0 after:top-0 after:z-[-1] after:w-0 after:hover:w-full after:h-full after:bg-pastedOrange after:absolute after:transition-all after:duration-300 after:ease-in-out ${className}`}
    >
      {text}
    </button>
  );
};

export default CommonButton;
