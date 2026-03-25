import React from "react";

const TwitterIcon = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="cursor-pointer hover:scale-110 transition"
    >
      <path
        fill="#ffffff"
        d="M18.244 2H21l-6.56 7.5L22.5 22h-6.94l-5.44-6.99L3.5 22H1l7.06-8.06L1.5 2h7.06l4.92 6.32L18.244 2zm-2.42 18h2.02L8.26 4H6.1l9.724 16z"
      />
    </svg>
  );
};

export default TwitterIcon;