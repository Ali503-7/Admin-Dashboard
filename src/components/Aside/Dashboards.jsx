import { useContext, useState, useEffect } from "react";
import { BiHome } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "../../App";

const Dashboards = () => {
  const { dark } = useContext(ThemeContext);
  const [dash, setDash] = useState(true);
  const location = useLocation();

  const [activeState, setActiveState] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname;
    const lastPath = currentPath.substring(currentPath.lastIndexOf("/") + 1);

    setActiveState(lastPath);
  }, [location.pathname]);

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
          dash ? "!h-[90px]" : "!h-[0px] mb-[0px]"
        }`}
      >
        <li>
          <NavLink
            to="/CRM"
            className={`NavLink flex flex-row items-center gap-4 py-2 pr-[14px] pl-[22px] rounded-r-full hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover ${
              activeState === "CRM"
                ? dark
                  ? "shadow-Dark_3 Dark_Bg_Active_Menu"
                  : "Bg_Custom_Active_menu shadow-Light_3 text-white"
                : ""
            }`}
            onClick={() => setActiveState("CRM")}
          >
            <div
              className={`w-[12px] h-[12px] border rounded-full ${
                dark
                  ? "dark:border-Dark-Text-Primary"
                  : "border-Light-Text-Primary"
              } ${activeState === "CRM" ? "border-white" : ""}`}
            ></div>
            CRM
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/"
            className={`NavLink flex flex-row items-center gap-4 py-2 pr-[14px] pl-[22px] rounded-r-full hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover ${
              activeState === ""
                ? dark
                  ? "shadow-Dark_3 Dark_Bg_Active_Menu"
                  : "Bg_Custom_Active_menu shadow-Light_3 text-white"
                : ""
            }`}
            onClick={() => setActiveState("")}
          >
            <div
              className={`w-[12px] h-[12px] border rounded-full ${
                dark
                  ? "dark:border-Dark-Text-Primary"
                  : "border-Light-Text-Primary"
              } ${activeState === "" ? "border-white" : ""}`}
            ></div>
            Analytics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Dashboards;
