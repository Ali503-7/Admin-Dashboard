import logo from "../../assets/Imgs/Logo/Logo.png";
import Dashboards from "./Dashboards";
import Apps from "./AppsLinst/Apps";

const Divider = ({text}) => {
  return (
    <div className="relative z-10">
      <div className="z-20 w-full h-px top-1/2 bg-Light-Other-Divider dark:bg-Dark-Other-Divider absolute"></div>
      <p className="relative z-30 w-fit px-[10px] ml-[14px] Caption text-Light-Text-Disabled dark:text-Dark-Action-Disabled bg-Light-Other-Body_Background dark:bg-Dark-Other-Body_Background">{text}</p>
    </div>
  )
}

const Aside = () => {

  return (
    <div className="py-2 flex flex-col gap-[6px]">
      <div className="flex flex-row justify-between items-center py-2 px-[22px]">
        <div className="flex flex-row gap-3 items-center">
          <img src={logo} alt="Materio" />
          <p className="text-Light-Text-Primary dark:text-Dark-Text-Primary font-semibold text-xl">
            MATERIO
          </p>
        </div>
        <input type="radio" name="" id="" />
      </div>
      <div className="pr-[18px]">
        <Dashboards />
        <Divider text="APPS & PAGES" />
        <Apps />
      </div>
    </div>
  );
};

export default Aside;
