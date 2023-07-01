import { IoLanguageSharp } from "react-icons/io5";
import PropTypes from "prop-types";

const Lang = ({ state }) => {
  return (
    <div className="relative" data-value="lang">
      <IoLanguageSharp
        className="hover:bg-Light-Action-Hover p-2 rounded-full text-Light-Text-Primary cursor-pointer  dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover text-[36px]"
        data-value="lang"
      />
      <div
        className={`shadow-Light_4 dark:shadow-Dark_4 bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card Body1 absolute right-2 top-[2.5em]  rounded-md overflow-hidden transition-height duration-500 dark:text-Dark-Text-Primary z-10 ${
          state ? "h-[104px] py-1 w-[6.5em]" : "h-0 py-0 w-[0em]"
        }`}
      >
        <ul>
          <li className=" pl-3 hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover py-1 transition-all duration-100 dark:text-Dark-Text-Primary cursor-pointer bg-Light-Action-Hover dark:bg-Dark-Action-Hover">
            English
          </li>
          <li className="pl-3 hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover py-1  dark:text-Dark-Text-Primary cursor-pointer">
            Arabic
          </li>
          <li className="pl-3 hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover py-1  dark:text-Dark-Text-Primary first-letter:cursor-pointer">
            French
          </li>
        </ul>
      </div>
    </div>
  );
};

Lang.propTypes = {
  state: PropTypes.bool,
};

export default Lang;
