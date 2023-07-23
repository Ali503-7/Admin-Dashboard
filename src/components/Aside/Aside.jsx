import logo from "../../assets/Imgs/Logo/Logo.png";
import Dashboards from "./Dashboards";
import Apps from "./AppsLinst/Apps";

const Divider = ({ text }) => {
  return (
    <div className="relative z-10">
      <div className="z-20 w-full h-px top-1/2 bg-Light-Other-Divider dark:bg-Dark-Other-Divider absolute"></div>
      <p className="relative z-30 w-fit px-[10px] ml-[14px] Caption text-Light-Text-Disabled dark:text-Dark-Action-Disabled bg-Light-Other-Body_Background dark:bg-Dark-Other-Body_Background">
        {text}
      </p>
    </div>
  );
};

const Aside = ({ setAside , aside}) => {
  return (
    <div className="py-2 flex flex-col gap-[6px]">
      <div className="flex flex-row justify-between items-center py-2 px-[22px]">
        <div className="flex flex-row gap-3 items-center">
          <img src={logo} alt="Materio" />
          <p className="text-Light-Text-Primary dark:text-Dark-Text-Primary font-semibold text-xl">
            MATERIO
          </p>
        </div>
        <p
          className="text-xl dark:text-Dark-Text-Primary cursor-pointer font-bold xl:hidden"
          onClick={() => setAside((prev) => !prev)}
        >
          x
        </p>
        <input type="radio" name="" id="" className="hidden xl:block" />
      </div>
      <div className="pr-[18px]">
        <Dashboards setAside={setAside} aside={aside} />
        <Divider text="APPS & PAGES" />
        <Apps setAside={setAside} />
      </div>
    </div>
  );
};

export default Aside;
