import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

const Dots = () => {
  const [menu , setMenu] = useState(false)

  return (
    <div className="absolute right-5 top-5 z-[5]">
      <BsThreeDotsVertical
        className="hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover w-6 h-6 p-1 rounded-full cursor-pointer"
        onClick={() => setMenu((prev) => !prev)}
      />
      <ul
        className={`bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card dark:shadow-Dark_4 shadow-Light_4  rounded-md absolute right-5  gap-2 flex flex-col text-Light-Text-Primary dark:text-Dark-Text-Primary overflow-hidden transition-height ${
          menu ? "w-32 h-[88px]" : "w-[0rem] h-[0px]"
        }`}
      >
        <li className="hover:bg-Light-Action-Hover cursor-pointer dark:hover:bg-Dark-Action-Hover pl-2">
          Last 28 Days
        </li>
        <li className="hover:bg-Dark-Action-Active cursor-pointer dark:hover:bg-Dark-Action-Hover pl-2">
          Last Month
        </li>
        <li className="hover:bg-Dark-Action-Active cursor-pointer dark:hover:bg-Dark-Action-Hover pl-2">
          Last Year
        </li>
      </ul>
    </div>
  );
};

export default Dots;
