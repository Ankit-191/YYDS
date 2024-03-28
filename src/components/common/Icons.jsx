//FAQ ARROW ICON
export const DownArrowIcon = ({ id, open }) => {
  return (
    <svg
      width="19"
      height="11"
      viewBox="0 0 19 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } transition-transform duration-300`}
    >
      <path
        opacity="0.7"
        d="M17.625 1.25L9.5 9.375L1.375 1.25"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
