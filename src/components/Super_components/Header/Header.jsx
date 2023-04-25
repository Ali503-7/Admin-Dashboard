import React from "react";
import { Serchbar } from "../../Bata_components/shearch_bar/serchbar";
import { Catigores } from "../../Bata_components/catigores/Catigores";

export const Header = () => {
  return (
    <header>
      <div className="pages_contant flex h-12 flex-row items-center justify-between border-b border-c1-E container">
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
      <Serchbar />
      <Catigores />
    </header>
  );
};
