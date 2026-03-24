import React from "react";

const Card = ({ imagePath, title, description,actionArrow}) => {
  return (
    <div className="flex flex-col p-4">
      <img
        className="w-60 h-64 object-cover rounded hover:scale-105 transition-transform cursor-pointer"
        src={imagePath}
        alt={title}
      />
      <div className="flex justify-between">
        <div  className="flex flex-col ">
      <p className="text-[16px]">{title}</p>
       {description && <p className="text-[14px]">{description}</p>}

      </div>
      {actionArrow && <div></div>}
      </div>
    </div>
  );
};

export default Card;
