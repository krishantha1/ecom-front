import React from "react";

const SvgClothIcon = ({ width = 24, height = 24, color = "#2A2F2F" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* T-shirt shape */}
      <path
        d="M7 4L10 2H14L17 4L21 6L19 10L16 9V21H8V9L5 10L3 6L7 4Z"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
      />
    </svg>
  );
};

export default SvgClothIcon;