import { useState } from "react";
import { BiHome } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Imgs/Logo/Logo.png";

const Aside = () => {
  const [Dash, seDash] = useState(false);

  return (
    <div className="py-2 flex flex-col gap-[6px]">
      <div className="flex flex-row justify-between items-center py-2">
        <div className="flex flex-row gap-2 items-center">
          <img src={logo} alt="Materio" />
          <p className="text-Light-Text-Primary dark:text-Dark-Text-Primary font-semibold text-xl">
            MATERIO
          </p>
        </div>
        <input type="radio" name="" id="" />
      </div>
      <div className="Body1 text-Light-Text-Primary dark:text-Dark-Text-Primary">
        <div
          className="flex flex-row items-center justify-between cursor-pointer bg-Light-Action-Hover dark:bg-Dark-Action-Hover h-11"
          onClick={() => seDash((prev) => !prev)}
        >
          <BiHome />
          Dashboards{" "}
          <span className="Chip text-Light-Contrast px-[10px] py-px rounded-2xl bg-Light-Main-Error dark:bg-Dark-Main-Error">
            New
          </span>
          <FaChevronDown />
        </div>
        <ul className={`flex flex-col gap-[6px] ${Dash ? "" : ""}`}>
          <Link className="flex flex-row items-center gap-4">
            <div className="!w-[14px] !h-[14px] border border-Light-Text-Primary dark:border-Dark-Text-Primary rounded-full"></div>
            CRM
          </Link>
          <Link className="flex flex-row items-center gap-4">
            <div className="!w-[14px] !h-[14px] border border-Light-Text-Primary dark:border-Dark-Text-Primary rounded-full"></div>
            Analytics
          </Link>
          <Link className="flex flex-row items-center gap-4">
            <div className="!w-[14px] !h-[14px] border border-Light-Text-Primary dark:border-Dark-Text-Primary rounded-full"></div>
            eCommerce
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
