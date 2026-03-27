import React from "react";

const SvgShippingIcon = ({ width = 24, height = 24, color = "#2A2F2F" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Truck body */}
      <rect x="2" y="6" width="13" height="10" rx="2" stroke={color} strokeWidth="2" />

      {/* Truck cabin */}
      <path
        d="M15 10H19L22 13V16H15V10Z"
        stroke={color}
        strokeWidth="2"
      />

      {/* Wheels */}
      <circle cx="7" cy="18" r="2" fill={color} />
      <circle cx="18" cy="18" r="2" fill={color} />
    </svg>
  );
};

export default SvgShippingIcon;