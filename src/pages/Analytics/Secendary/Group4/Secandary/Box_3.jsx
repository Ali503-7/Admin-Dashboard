import Chart from "react-apexcharts";
import { MdCardTravel } from "react-icons/md";
import Dots from "../../../../../components/Geniral/Dots";

const Box_3 = () => {
  return (
    <div className="Box col-span-1 row-span-1 flex justify-between flex-col gap-4">
      <Dots />
      <div className=" w-10 h-10 flex items-center justify-center rounded-full text-[#fff] bg-Light-Main-Primary mb-5">
        <MdCardTravel className=" text-[26px]" />
      </div>
      <div className="mb-3">
        <p className="Body2 !font-semibold">New Project</p>
        <div className="flex items-center gap-2">
          <p className="H6">862</p>
          <span className="Caption text-Light-Main-Error dark:text-Dark-Main-Error">
            -18%
          </span>
        </div>
        <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary">
          Yearly Project
        </p>
      </div>
    </div>
  );
};

export default Box_3;
