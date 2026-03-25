import React from "react";

const EmailIcon = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="cursor-pointer hover:scale-110 transition"
    >
      <defs>
        <linearGradient id="mailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00c6ff" />
          <stop offset="100%" stopColor="#0072ff" />
        </linearGradient>
      </defs>

      <path
        fill="url(#mailGradient)"
        d="M2 4h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm10 7L2 6v12h20V6l-10 5zm0-2l10-5H2l10 5z"
      />
    </svg>
  );
};

export default EmailIcon;