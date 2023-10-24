import { BiGridAlt, BiUser } from "react-icons/bi";
import { IoAddCircleOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { AiOutlineSetting } from "react-icons/ai";
import { TbHelp } from "react-icons/tb";
import {
  MdOutlineReceipt,
  MdOutlinePieChart,
  MdWebAsset,
} from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Shortcut = ({ state }) => {
  const ShortCutsObj = [
    {
      Icon: <SlCalender className="!w-5 !h-5" />,
      Name: "Calender",
      dis: "Appointments",
    },
    {
      Icon: <MdOutlineReceipt />,
      Name: "Invoice App",
      dis: "Manage Accounts",
    },
    {
      Icon: <BiUser />,
      Name: "Users",
      dis: "Manage Users",
    },
    {
      Icon: <IoShieldCheckmarkOutline />,
      Name: "Role Management",
      dis: "permissions",
    },
    {
      Icon: <MdOutlinePieChart />,
      Name: "Dashboard",
      dis: "User Dashboard",
    },
    {
      Icon: <AiOutlineSetting />,
      Name: "Settings",
      dis: "Account Settings",
    },
    {
      Icon: <TbHelp />,
      Name: "Help Center",
      dis: "FAQs & Articles",
    },
    {
      Icon: <MdWebAsset />,
      Name: "Dialogs",
      dis: "Useful Dialogs",
    },
  ];

  const ShortFunc = () => {
    return ShortCutsObj.map((short) => {
      return (
        <Link
          className="bg-Light-Other-Paper_Card py-8 dark:bg-Dark-Other-Paper_Card flex items-center flex-col justify-start w-full dark:hover:bg-Dark-Action-Hover hover:bg-Light-Action-Hover"
          key={short.Name}
        >
          <div className="bg-Light-Action-Selected dark:bg-Dark-Action-Selected w-12 h-12 rounded-full flex justify-center items-center icon">
            {short.Icon}
          </div>
          <p className="dark:text-Dark-Main-Secondary text-Light-Main-Secondary H6 text-center">
            {short.Name}
          </p>
          <p className="Body2 dark:text-Dark-Main-Secondary text-Light-Main-Secondary">
            {short.dis}
          </p>
        </Link>
      );
    });
  };

  return (
    <div
      className="text-xl text-Light-Text-Primary cursor-pointer rounded-full  dark:text-Dark-Text-Primary relative"
      data-value="shortcut"
    >
      <BiGridAlt
        data-value="shortcut"
        className="hover:bg-Light-Action-Hover p-2 rounded-full text-Light-Text-Primary cursor-pointer  dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover text-[36px]"
      />
      <div
        className={`absolute shadow-Light_4 dark:shadow-Dark_4 bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card right-[.5em] rounded-md duration-500 transition-Maxheight overflow-hidden z-10 ${          state
          ? "w-[314px] max-h-[470px] top-[50px] right-[-70px] sm:w-[19em] sm:max-h-[470px] sm:top-9 sm:right-0"
          : "w-[0] max-h-[0] sm:right-0 right-[-30px] top-[50px]"}`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <p className="leading-[1.5] text-[1.125rem] font-semibold text-Light-Main-Secondary dark:text-Dark-Main-Secondary">
            Shortcuts
          </p>
          <IoAddCircleOutline />
        </div>
        <div className="grid grid-cols-2 w-full gap-x-[1px] gap-y-[1px] bg-Light-Other-Divider dark:bg-Dark-Other-Divider border-t-Light-Other-Divider dark:border-t-Dark-Other-Divider border-[1px] border-b-Light-Other-Divider dark:border-b-Dark-Other-Divider border-x-Light-Other-Paper_Card dark:border-x-Dark-Other-Paper_Card min-h-full max-h-[70vh] overflow-auto">
          {ShortFunc()}
        </div>
      </div>
    </div>
  );
};

Shortcut.propTypes = {
  state: PropTypes.bool,
};

export default Shortcut;
