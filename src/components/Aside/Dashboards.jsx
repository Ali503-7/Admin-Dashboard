import { useState } from "react";
import { BiHome } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Dashboards = () => {
  const [dash, setDash] = useState(true)
  
  return (
    <div className="Body1 text-Light-Text-Primary dark:text-Dark-Text-Primary">
      <div
        className="flex flex-row items-center justify-between cursor-pointer bg-Light-Action-Hover dark:bg-Dark-Action-Hover py-2 pr-[14px] pl-[22px] rounded-r-full mb-[6px]"
        onClick={() => setDash((prev) => !prev)}
      >
        <BiHome />
        Dashboards
        <span className="Chip text-Light-Contrast px-[5px] rounded-2xl bg-Light-Main-Error dark:bg-Dark-Main-Error">
          New
        </span>
        <FaChevronDown
          className={
            dash
              ? "rotate-0 transition-transform"
              : "-rotate-90 transition-transform"
          }
        />
      </div>
      <ul
        className={`flex flex-col gap-[6px] mb-2 overflow-hidden transition-height ${
          dash ? "!h-[132px]" : "!h-[0px] mb-[0px]"
        }`}
      >
        <NavLink className="NavLink">
          <div className="circle"></div>
          CRM
        </NavLink>
        <NavLink className="NavLink">
          <div className="circle"></div>
          Analytics
        </NavLink>
        <NavLink className="NavLink">
          <div className="circle"></div>
          eCommerce
        </NavLink>
      </ul>
    </div>
  );
};

export default Dashboards;
