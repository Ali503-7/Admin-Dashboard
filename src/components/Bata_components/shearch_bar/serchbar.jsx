import {
  faUser,
  faBasketShopping,
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Serchbar = () => {
  return (
    <div className="Hero container flex h-32 flex-row items-center justify-between">
      <div className="logo font-braah text-2xl">Frechnesecom</div>
      <div className="search relative flex flex-row items-center">
        <div className="list absolute left-3 flex cursor-pointer flex-row items-center gap-2 font-poppins text-sm font-bold after:absolute after:-right-[13px] after:h-full after:w-[1px] after:bg-c1-D">
          <ul>
            <li>All categories</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="rotate-90 text-[10px] text-c2-A"
          />
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Products, categories ..."
          className="h-[42px] w-[500px] rounded-2xl border border-c1-D bg-c1-H pl-[150px] text-sm outline-none"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute right-3"
        />
      </div>
      <div className="icons flex items-center gap-8">
        <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
        <div className="relative">
          <FontAwesomeIcon
            icon={faBasketShopping}
            className="cursor-pointer "
          />
          <span className="absolute -left-1 top-4 flex h-3 w-3 items-center justify-center rounded-full bg-c4-A text-[9px] text-c1-J">
            4
          </span>
        </div>
      </div>
    </div>
  );
};
