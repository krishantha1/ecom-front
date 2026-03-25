import React from "react";

const FilterIcon = ({ size = 24, color = "#000" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer hover:scale-110 transition"
    >
      <path
        d="M2 3H15M4 8H13M7 13H10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default FilterIcon;