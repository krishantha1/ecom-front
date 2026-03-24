import React from "react";

const Card = ({ imagePath, title, description,actionArrow,height,width}) => {
  return (
    <div className="flex flex-col p-4">
      <img
        className={`h-[${height? height:'240px'}] w-[200px] bg-cover bg-center
         border rounded hover:scale-105 cursor-pointer `}
        src={imagePath}

        
      />
      <div className="flex justify-between">
        <div  className="flex flex-col ">
      <p className="text-[16px] p-2">{title}</p>
       {description && <p className="text-[14px]">{description}</p>}

      </div>
      {actionArrow && <div></div>}
      </div>
    </div>
  );
};

export default Card;
