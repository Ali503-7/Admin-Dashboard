import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiEnvelope } from "react-icons/bi";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import Invoice from "./Invoice/Invoice";

const Apps = () => {
  const location = useLocation();

  const [activeState, setActiveState] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname;
    const lastPath = currentPath.substring(currentPath.lastIndexOf("/") + 1);

    setActiveState(lastPath);
  }, [location]);

  return (
    <div className="flex flex-col Body1 text-Light-Text-Primary dark:text-Dark-Text-Primary py-2">
      <NavLink
        to="/email"
        className={`NavLink !gap-3 ${activeState === "email" ? "active" : ""}`}
        onClick={() => setActiveState("email")}
      >
        <BiEnvelope />
        Email
      </NavLink>
      <NavLink
        to="/chat"
        className={`NavLink !gap-3 ${activeState === "chat" ? "active" : ""}`}
        onClick={() => setActiveState("chat")}
      >
        <BsChatLeft />
        Chat
      </NavLink>
      <NavLink
        to="/calendar"
        className={`NavLink !gap-3 ${
          activeState === "calendar" ? "active" : ""
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
          activeState === "dialog-examples" ? "active" : ""
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
