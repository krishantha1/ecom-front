import React, { useState } from "react";

const SvgFavourite = ({ size = 24 }) => {
  const [liked, setLiked] = useState(false);

  return (
    <svg
      onClick={() => setLiked(!liked)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={liked ? "red" : "none"}
      stroke={liked ? "red" : "gray"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cursor-pointer transition duration-200"
    >
      <path d="M20.8 4.6c-1.5-1.6-4-1.6-5.5 0L12 7.9l-3.3-3.3c-1.5-1.6-4-1.6-5.5 0-1.6 1.7-1.6 4.3 0 6l3.3 3.4L12 21l5.5-7 3.3-3.4c1.6-1.7 1.6-4.3 0-6z" />
    </svg>
  );
};

export default SvgFavourite;