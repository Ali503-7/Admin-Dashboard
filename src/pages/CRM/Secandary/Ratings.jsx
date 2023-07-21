import Girl from "../../../assets/Imgs/triangle-light.png";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Ratings = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="lg:col-span-3 sm:col-span-3 Box h-[154px] flex flex-row justify-between">
      <div className="gap-[6px]">
        <h4 className="Body1 !font-semibold">Ratings</h4>

        <div className="flex items-center gap-1 pt-5 pb-[6px]">
          <h5 className="H5 font-medium">13k</h5>
          <span className="text-Light-Main-Success dark:text-Dark-Main-Success Caption">
            +15.6%
          </span>
        </div>

        <span
          className={`text-Light-Main-Primary dark:text-Dark-Main-Primary Baldge-Label px-[6.5px] rounded-full  ${
            dark ? "Dark_Bg_Primary" : "Bg_Custom_primary"
          }`}
        >
          Year of 2021
        </span>
      </div>
      <img
        src={Girl}
        alt="girl"
        className="h-[178px] relative -top-11 left-5"
      />
    </div>
  );
};

export default Ratings;
