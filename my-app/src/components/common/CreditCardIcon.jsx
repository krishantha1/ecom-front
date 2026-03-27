import React from "react";

const CreditCardIcon = ({ width = 24, height = 24, color = "#2A2F2F" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      {/* Card body */}
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="2"
        stroke={color}
        strokeWidth="2"
      />

      {/* Top stripe */}
      <rect x="2" y="8" width="20" height="2" fill={color} />

      {/* Chip */}
      <rect
        x="5"
        y="12"
        width="4"
        height="3"
        rx="0.5"
        fill={color}
      />

      {/* Lines */}
      <rect x="11" y="13" width="6" height="1.5" fill={color} />
      <rect x="11" y="15.5" width="4" height="1.5" fill={color} />
    </svg>
  );
};

export default CreditCardIcon;