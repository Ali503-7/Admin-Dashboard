import { useContext, useState } from "react";
import { BiHome } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../App";

const Dashboards = ({setAside}) => {
  const { dark } = useContext(ThemeContext);
  const [dash, setDash] = useState(true);

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
            className={({ isActive }) =>
              isActive
                ? dark
                  ? "shadow-Dark_3 Dark_Bg_Active_Menu NavLink"
                  : "Bg_Custom_Active_menu shadow-Light_3 text-white NavLink"
                : `NavLink`
            }
          >
            <div></div>
            CRM
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? dark
                  ? "shadow-Dark_3 Dark_Bg_Active_Menu NavLink"
                  : "Bg_Custom_Active_menu shadow-Light_3 text-white NavLink"
                : `NavLink`
            }
          >
            <div></div>
            Analytics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Dashboards;
