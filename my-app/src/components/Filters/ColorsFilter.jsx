import React, { useCallback, useState } from 'react';

// Map color names to hex codes
export const colorSelector = {
  purple: "#8434E1",
  black: "#252525",
  white: "#FFFFFF",
  gray: "#808080",
  blue: "#0000FF",
  red: "#FF0000",
  orange: "#FFA500",
  navy: "#000080",
  yellow: "#FFFF00",
  pink: "#FFC0CB",
  green: "#008000"
};

const ColorsFilter = ({ colors = [] }) => {
  const [appliedColors, setAppliedColors] = useState([]);

  const onClickDiv = useCallback(
    (item) => {
        console.log('item',item)
      if (appliedColors.includes(item)) {
        setAppliedColors(appliedColors.filter((color) => color !== item));
      } else {
        setAppliedColors([...appliedColors, item]);
      }
    },
    [appliedColors]
  );

  return (
    <div className="flex flex-col mb-4">
      <p className="text-[16px] text-black mt-5 mb-5">Colors</p>
      <div className="flex flex-wrap px-2">
        {colors.map((item, index) => {
          // Safely get color hex code (case-insensitive)
          const colorHex =
            colorSelector[item.toLowerCase()] || "#ccc"; // fallback gray if not found

          const isSelected = appliedColors.includes(item);

          return (
            <div key={`${item}-${index}`} className="flex flex-col mr-2 items-center">
              <div
                className={`w-8 h-8 border rounded-xl mr-4 cursor-pointer hover:scale-110 transition-transform duration-150 ${
                  isSelected ? "border-black border-2" : "border-gray-300"
                }`}
                onClick={() => onClickDiv(item)}
                style={{ background: colorHex }}
              ></div>
              <p
                className="text-sm mb-2"
                style={{ color: isSelected ? "black" : "#9CA3AF" }}
              >
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorsFilter;