import React from "react";
import { Wishlist } from "../common/Wishlist";
import { AccountIcon } from "../common/Accounticon";
import { CartIcon } from "../common/Carticon";

const Navigation = () => {
  return (
    <nav className="flex items-center py-6 px-16  justify-between gap-40">
      <div className=" flex items-center gap-6">
        {/*logo */}

        <a className="text-3xl text-black gap-8 font-bold" href="/">
          {" "}
          Shope Ease
        </a>
      </div>
      <div className="flex flex-warp items-center gap-10 flex-1">
        {/* nav items*/}

        <ul className="flex gap-14 text-gray-600 hover:text-black">
          <li>
            <a href="/"> Shop </a>
          </li>
          <li>
            <a href="/mens"> Men </a>
          </li>
          <li>
            <a href="/womens"> Women </a>
          </li>
          <li>
            <a href="/kids"> Kids </a>
          </li>
        </ul>
      </div>

      <div className="border rounded flex overflow-hidden">
        <input
          type="text"
          className="px-4 py-2 flex-1 outline-none"
          placeholder="Search..."
        
        />

        <button className="flex items-center justify-center px-4 border-l">
          <svg
            className="h-4 w-4 text-gray-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M8 2a6 6 0 104.472 10.028l3.75 3.75 1.414-1.414-3.75-3.75A6 6 0 008 2z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {/* Action item - icons */}

        <ul className="flex items-center gap-8">
            <li><button><Wishlist/></button></li>
            <li><button><AccountIcon/></button></li>
            <li><a href="/cart-items"><CartIcon/></a></li>

        </ul>
    </div>
    </nav>
  );
};

export default Navigation;
