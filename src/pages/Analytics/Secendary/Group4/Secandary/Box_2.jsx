import React from "react";
import Dots from "../../../../../components/Geniral/Dots";
import { RiBarChartFill } from "react-icons/ri";

const Box_2 = () => {
  return (
    <div className="Box col-span-1 row-span-1 flex justify-between flex-col gap-4">
      <Dots />
      <div
        className="flex justify-center items-center w-[41px] h-[41px] bg-Light-Main-Secondary dark:bg-Dark-Main-Secondary rounded-full shadow-Light_6 dark:shadow-Dark_6
      "
      >
        <RiBarChartFill className="text-white text-2xl" />
      </div>
      <div className="py-3">
        <p className="Body2 !font-semibold">Total Profit</p>
        <div className="flex flex-row gap-2">
          <span className="H6">$25.6k</span>
          <span className="Caption text-Light-Main-Success dark:text-Dark-Main-Success">
            +42%
          </span>
        </div>
        <p className="Caption text-Light-Main-Secondary dark:text-Dark-Main-Secondary">
          Weekly Profit
        </p>
      </div>
    </div>
  );
};

export default Box_2;
