import {
  faUser,
  faBasketShopping,
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Header = () => {
  return (
    <header className="container px-3">
      <div className="pages_contant flex h-12 flex-row items-center justify-between border-b border-c1-E">
        <div className="contant flex flex-row gap-8 font-sans text-[12px] text-c1-A">
          <p className="cursor-pointer text-c2-A">Chat with us</p>
          <p>+420 336 775 664</p>
          <p>info@freshnesecom.com</p>
        </div>
        <div className="pages flex flex-row gap-8 font-sans text-[12px] text-c2-A">
          <a href="#Blog" className="cursor-pointer">
            Blog
          </a>
          <a href="#About" className="cursor-pointer">
            About Us
          </a>
          <a href="#Careers" className="cursor-pointer">
            Careers
          </a>
        </div>
      </div>

      <div className="Hero flex h-32 flex-row items-center justify-between">
        <div className="logo font-braah text-2xl">Frechnesecom</div>
        <div className="search relative flex flex-row items-center">
          <div className="list absolute left-5 flex cursor-pointer flex-row items-center gap-2 text-sm font-bold after:w-[1px] after:h-full after:bg-c1-D after:absolute after:-right-4">
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
            className="h-[42px] w-[500px] rounded-2xl border border-c1-D bg-c1-H pl-[150px] outline-none text-sm"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-5"
          />
        </div>
        <div className="icons flex gap-8">
          <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
          <FontAwesomeIcon icon={faBasketShopping} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};
