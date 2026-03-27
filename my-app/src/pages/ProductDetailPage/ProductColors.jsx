import React from "react";
import { colorSelector } from "../../components/Filters/ColorsFilter";

const ProductColors = ({ colors }) => {
  console.log("colors", colors);

  return (
    <div className="flex gap-2 px-2">
      {colors?.map((color, index) => {
        const key = color.toLowerCase(); // 🔥 IMPORTANT FIX
        const hex = colorSelector[key];

        return (
          <div
            key={index}
            className="rounded-full w-5 h-5  mx-2 border border-gray-300"
            style={{
              backgroundColor: hex || "#ccc", 
            }}
            title={color}
          />
        );
      })}
    </div>
  );
};

export default ProductColors;