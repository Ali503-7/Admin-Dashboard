import { useContext } from "react";
import { ThemeContext } from "../../App";
import Man from "../../assets/Imgs/pose_m18.png";


const Section = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div className="bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card flex flex-row sm:col-span-4 p-5 shadow-Light_6 dark:shadow-Dark_6 h-[154px] rounded-md">
      <div className="gap-[6px]">
        <h4 className="Body1 !font-semibold">Sessions</h4>

        <div className="flex items-center gap-1 pt-5 pb-[6px]">
          <h5 className="H5 font-medium">24.5k</h5>
          <span className="text-Light-Main-Success dark:text-Dark-Main-Success Caption">
            +20%
          </span>
        </div>

        <span
          className={`text-Light-Main-Secondary dark:text-Dark-Main-Secondary Baldge-Label px-[6.5px] rounded-full  ${
            dark ? "Dark_Bg_Secondary" : "Bg_Custom_Secondary"
          }`}
        >
          Last Week
        </span>
      </div>
      <img
        src={Man}
        alt="girl"
        className="w-[86.977px] h-[178px] relative -top-11 left-[17px]"
      />
    </div>
  );
}

export default Section