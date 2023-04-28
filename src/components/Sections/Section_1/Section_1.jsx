import React from "react";
import SideBar from "../../Super_components/Aside/SideBar";
import Banner from "../../Super_components/Banner/Banner";
import Product_box from "../../Bata_components/Product_box/Product_box";

export const Section_1 = () => {
  return (
    <div className="container flex flex-row justify-between">
      <SideBar />
      <div className="flex w-9/12 flex-col ">
        <Banner />
        <Product_box />
      </div>
    </div>
  );
};
