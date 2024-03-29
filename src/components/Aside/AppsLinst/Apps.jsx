import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BiEnvelope } from "react-icons/bi";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { ThemeContext } from "../../../App";

const Apps = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="flex flex-col Body1 text-Light-Text-Primary dark:text-Dark-Text-Primary py-2">
      <NavLink
        to="/email"
        className={({ isActive }) =>
          isActive
            ? dark
              ? "shadow-Dark_3 Dark_Bg_Active_Menu NavLink"
              : "Bg_Custom_Active_menu shadow-Light_3 text-white NavLink"
            : `NavLink`
        }
      >
        <div className={` `}>
          <BiEnvelope />
        </div>
        Email
      </NavLink>
      <NavLink
        to="/chat"
        className={({ isActive }) =>
          isActive
            ? dark
              ? "shadow-Dark_3 Dark_Bg_Active_Menu NavLink"
              : "Bg_Custom_Active_menu shadow-Light_3 text-white NavLink"
            : `NavLink`
        }
        onClick={() => setActiveState("chat")}
      >
        <BsChatLeft />
        Chat
        <FaGears className="ml-auto" />
      </NavLink>
      <NavLink
        to="/calendar"
        className={({ isActive }) =>
          isActive
            ? dark
              ? "shadow-Dark_3 Dark_Bg_Active_Menu NavLink"
              : "Bg_Custom_Active_menu shadow-Light_3 text-white NavLink"
            : `NavLink`
        }
      >
        <AiOutlineCalendar />
        Calendar
        <FaGears className="ml-auto" />
      </NavLink>
      {/*  */}
      <NavLink
        to="/dialog-examples"
        disable={true}
        className={({ isActive }) =>
          isActive
            ? dark
              ? "shadow-Dark_3 Dark_Bg_Active_Menu NavLink"
              : "Bg_Custom_Active_menu shadow-Light_3 text-white NavLink"
            : `NavLink`
        }
      >
        <MdContentCopy />
        <p className="truncate">Dialog Examples</p>
        <FaGears className="ml-auto" />
      </NavLink>
    </div>
  );
};

export default Apps;
