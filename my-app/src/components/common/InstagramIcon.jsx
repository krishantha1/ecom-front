import React from "react";

const InstagramIcon = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="cursor-pointer hover:opacity-80"
    >
      <defs>
        <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="25%" stopColor="#dd2a7b" />
          <stop offset="50%" stopColor="#8134af" />
          <stop offset="75%" stopColor="#515bd4" />
        </linearGradient>
      </defs>

      <path
        fill="url(#igGradient)"
        d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5C20 5.68 18.32 4 16.25 4h-8.5zm4.25 3.5a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 2a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zm5.25-2.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
      />
    </svg>
  );
};

export default InstagramIcon;