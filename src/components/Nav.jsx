import { useContext } from "react";
import { ThemeContext } from "../App";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLanguageSharp } from "react-icons/io5";
import { TbMoonStars } from "react-icons/tb";
import { BiGridAlt, BiSun } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import User from "../assets/Imgs/avater/Avatar.png";
const Nav = () => {
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <nav className="">
      <div className="flex flex-row justify-between items-center">
        <div>
          <div className="text-xl text-Light-Text-Primary cursor-pointer p-2 rounded-full hover:bg-Light-Action-Hover dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover">
            <AiOutlineSearch />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="text-xl text-Light-Text-Primary cursor-pointer p-2 rounded-full hover:bg-Light-Action-Hover dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover">
            <IoLanguageSharp />
          </div>
          <div
            className="text-xl text-Light-Text-Primary cursor-pointer p-2 rounded-full hover:bg-Light-Action-Hover dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover"
            onClick={() => {
              setDark((prev) => !prev)
              localStorage.setItem('dark', !dark)
            }}
          >
            {dark ? <BiSun/> : <TbMoonStars />}
          </div>
          <div className="text-xl text-Light-Text-Primary cursor-pointer p-2 rounded-full hover:bg-Light-Action-Hover dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover">
            <BiGridAlt />
          </div>
          <div className="text-xl text-Light-Text-Primary cursor-pointer p-2 rounded-full hover:bg-Light-Action-Hover relative dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover">
            <FaRegBell />
            <div className="w-[7.5px] h-[7.5px] absolute bg-Light-Main-Error dark:outline-Dark-Other-Body_Background rounded-full outline outline-[1.5px] top-1/4 right-1/4 outline-Light-Other-Body_Background"></div>
          </div>
          <div>
            <img
              src={User}
              alt="Avatar"
              className="w-10 h-10 m-2 rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
