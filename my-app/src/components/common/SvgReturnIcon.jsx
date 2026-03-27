import React from "react";

const SvgReturnIcon = ({ width = 24, height = 24, color = "#2A2F2F" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circular arrow */}
      <path
        d="M4 12A8 8 0 1 1 12 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Arrow head */}
      <path
        d="M4 12L8 8M4 12L8 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SvgReturnIcon;