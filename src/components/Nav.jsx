import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLanguageSharp } from "react-icons/io5";
import { TbMoonStars } from "react-icons/tb";
import { BiGridAlt, BiSun } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import User from "../assets/Imgs/avater/Avatar.png";

const Nav = () => {
  const { dark, setDark } = useContext(ThemeContext);
  const [lang, setLang] = useState(false);
  const [shortCut, setShortCut] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);

  const StateHandel = (label) => {
    let seter =
      label.target.getAttribute("data-value") ||
      label.target.parentElement.getAttribute("data-value");
    const setterFunction = eval(`set${seter}`); // Use eval to get the setter function
    setterFunction((prev) => !prev); // Call the setter function to update the state
  };

  return (
    <nav>
      <div className="flex flex-row justify-between items-center">
        <div>
          <div className="text-xl text-Light-Text-Primary cursor-pointer p-2 rounded-full hover:bg-Light-Action-Hover dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover">
            <AiOutlineSearch />
          </div>
        </div>
        <div
          className="flex flex-row items-center"
          onClick={(e) => StateHandel(e)}
        >
          <div className="relative" data-value="Lang">
            <IoLanguageSharp
              className="hover:bg-Light-Action-Hover p-2 rounded-full text-Light-Text-Primary cursor-pointer  dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover text-[36px]"
              data-value="Lang"
            />
            <div
              className={`shadow-Light_4 dark:shadow-Dark_4 bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card Body1 absolute -left-16 top-[2em] py-1 rounded-md overflow-hidden transition-all duration-500 dark:text-Dark-Text-Primary ${
                lang ? "h-[104px]" : "h-0 py-0"
              }`}
            >
              <ul>
                <li className="pr-9 pl-3 hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover py-1 transition-all duration-100 dark:text-Dark-Text-Primary">
                  English
                </li>
                <li className="pr-9 pl-3 hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover py-1  dark:text-Dark-Text-Primary  transition-all duration-100">
                  Arabic
                </li>
                <li className="pr-9 pl-3 hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover py-1  dark:text-Dark-Text-Primary transition-all duration-100">
                  French
                </li>
              </ul>
            </div>
          </div>
          <div
            className="text-xl text-Light-Text-Primary cursor-pointer p-2 rounded-full hover:bg-Light-Action-Hover dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover"
            onClick={() => {
              localStorage.setItem("dark", !dark);
            }}
            data-value="Dark"
          >
            {dark ? (
              <BiSun data-value="Dark" />
            ) : (
              <TbMoonStars data-value="Dark" />
            )}
          </div>
          <div
            className="text-xl text-Light-Text-Primary cursor-pointer p-2 rounded-full hover:bg-Light-Action-Hover dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover"
            data-value="ShortCut"
          >
            <BiGridAlt data-value="ShortCut" />
          </div>
          <div
            className="text-xl text-Light-Text-Primary cursor-pointer p-2 rounded-full hover:bg-Light-Action-Hover relative dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover"
            data-value="Notification"
          >
            <FaRegBell data-value="Notification" />
            <div className="w-[7.5px] h-[7.5px] absolute bg-Light-Main-Error dark:outline-Dark-Other-Body_Background rounded-full outline outline-[1.5px] top-1/4 right-1/4 outline-Light-Other-Body_Background"></div>
          </div>
          <div data-value="Profile">
            <img
              src={User}
              alt="Avatar"
              className="w-10 h-10 m-2 rounded-full cursor-pointer"
              data-value="Profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
