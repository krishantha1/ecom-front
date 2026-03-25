const ArrowIcon = ({ direction = "right", size = 24, color = "currentColor" }) => {
  const rotate = {
    right: "0deg",
    left: "180deg",
    up: "-90deg",
    down: "90deg",
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: `rotate(${rotate[direction]})` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;