import React from "react";

export const AccountIcon = () => {
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

      {/* Head */}
      <circle cx="22" cy="16" r="6" fill="#6B7280" />

      {/* Body */}
      <path
        d="M10 34c0-6 5-10 12-10s12 4 12 10"
       stroke="#6B7280"
      />
    </svg>
  );
};