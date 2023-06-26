import { NavLink } from "react-router-dom";
import { BiEnvelope } from "react-icons/bi";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md"
import Invoice from "./Invoice/Invoice";

const Apps = () => {

  return (
    <div className="flex flex-col Body1 text-Light-Text-Primary dark:text-Dark-Text-Primary py-2">
      <NavLink to="" className="NavLink !gap-3">
        <BiEnvelope />
        Email
      </NavLink>
      <NavLink to="" className="NavLink !gap-3">
        <BsChatLeft />
        Chat
      </NavLink>
      <NavLink to="" className="NavLink !gap-3">
        <AiOutlineCalendar />
        Calendar
      </NavLink>
      {/*  */}
      <Invoice />
      {/*  */}
      <NavLink to="" className="NavLink !gap-3">
        <MdContentCopy />
        <p className="truncate">Dialog Examples</p>
      </NavLink>
    </div>
  );
};

export default Apps;
