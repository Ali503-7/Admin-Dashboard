import { TbMoonStars } from "react-icons/tb";
import { BiSun } from "react-icons/bi";
import { useContext } from 'react'
import { ThemeContext } from "../../App";

const Dark = () => {
  // Access the `dark` state and the `setDark` function from the ThemeContext
    const { dark, setDark } = useContext(ThemeContext);
  
  return (
    <div
      className="text-xl text-Light-Text-Primary cursor-pointer p-2 rounded-full hover:bg-Light-Action-Hover dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover"
      onClick={() => {
        setDark((prev) => !prev);
        localStorage.setItem("dark", !dark);
      }}
      data-value="Dark"
    >
      {dark ? <BiSun data-value="Dark" /> : <TbMoonStars data-value="Dark" />}
    </div>
  );
};

export default Dark