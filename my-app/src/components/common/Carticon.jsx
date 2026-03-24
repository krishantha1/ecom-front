import React from "react";

export const CartIcon = () => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer hover:fill-black"
    >
      <rect width="44" height="44" rx="8" fill="white" />

      {/* Cart body */}
      <path
        d="M12 14h2l2.5 10h13l2-7H16"
        stroke="#6B7280"
        strokeWidth="2"
       
      />

      {/* Wheels */}
      <circle cx="18" cy="32" r="2" fill="#6B7280" />
      <circle cx="28" cy="32" r="2" fill="#6B7280" />
    </svg>
  );
};