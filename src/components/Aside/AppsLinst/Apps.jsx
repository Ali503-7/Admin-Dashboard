import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { BiEnvelope } from "react-icons/bi";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import Invoice from "./Invoice/Invoice";
import { ThemeContext } from "../../../App";

const Apps = ({ setAside }) => {
  const {dark} = useContext(ThemeContext)
  const location = useLocation();

  const [activeState, setActiveState] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname;
    const lastPath = currentPath.substring(currentPath.lastIndexOf("/") + 1);
    setAside((prev) => !prev);
    setActiveState(lastPath);
  }, [location]);

  return (
    <div className="flex flex-col Body1 text-Light-Text-Primary dark:text-Dark-Text-Primary py-2">
      <NavLink
        to="/email"
        className={`NavLink !gap-3 ${
          activeState === "email"
            ? dark
              ? "shadow-Dark_3 Dark_Bg_Active_Menu"
              : "Bg_Custom_Active_menu shadow-Light_3 text-white"
            : ""
        }`}
        onClick={() => setActiveState("email")}
      >
        <BiEnvelope />
        Email
      </NavLink>
      <NavLink
        to="/chat"
        className={`NavLink !gap-3 ${
          activeState === "chat"
            ? dark
              ? "shadow-Dark_3 Dark_Bg_Active_Menu"
              : "Bg_Custom_Active_menu shadow-Light_3 text-white"
            : ""
        }`}
        onClick={() => setActiveState("chat")}
      >
        <BsChatLeft />
        Chat
      </NavLink>
      <NavLink
        to="/calendar"
        className={`NavLink !gap-3 ${
          activeState === "calendar"
            ? dark
              ? "shadow-Dark_3 Dark_Bg_Active_Menu"
              : "Bg_Custom_Active_menu shadow-Light_3 text-white"
            : ""
        }`}
        onClick={() => setActiveState("calendar")}
      >
        <AiOutlineCalendar />
        Calendar
      </NavLink>
      {/*  */}
      <Invoice />
      {/*  */}
      <NavLink
        to="/dialog-examples"
        className={`NavLink !gap-3 ${
          activeState === "dialog-examples"
            ? dark
              ? "shadow-Dark_3 Dark_Bg_Active_Menu"
              : "Bg_Custom_Active_menu shadow-Light_3 text-white"
            : ""
        }`}
        onClick={() => setActiveState("dialog-examples")}
      >
        <MdContentCopy />
        <p className="truncate">Dialog Examples</p>
      </NavLink>
    </div>
  );
};

export default Apps;
