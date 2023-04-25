import React from "react";
import SideBar from "../Aside/SideBar";
import Banner from "../Banner/Banner";
import Product_box from "../../Bata_components/Product_box/Product_box";

export const Section_1 = () => {
  return (
    <div className="flex flex-row justify-between">
      <SideBar />
      <div className="flex flex-col w-9/12">
        <Banner />
        <Product_box />
      </div>
    </div>
  );
};
