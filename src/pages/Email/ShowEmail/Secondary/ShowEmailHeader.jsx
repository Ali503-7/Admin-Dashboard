import React from "react";
import { useContext } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { ThemeContext } from "../../../../App";
import { Link, useNavigate } from "react-router-dom";
import { EmailFilterAtom } from "../../../../atoms/EmailAtomFilter";
import useMessages from "../../../../functions/useMassages";

const ShowEmailHeader = ({ id }) => {
  const { dark } = useContext(ThemeContext);
  const typeFilter = EmailFilterAtom.useValue();
  const messages = useMessages(typeFilter); // Corrected variable name

  const navigate = useNavigate();

  // Check if message with the given 'id' exists
  const message = messages.find((email) => email.id === id);
  const messageIndex = messages.findIndex((email) => email.id === id);

  const getNextId = () => {
    const nextIndex = messageIndex + 1;
    if (nextIndex < messages.length) {
      return messages[nextIndex].id;
    }
    return null;
  };

  const getPrevId = () => {
    const prevIndex = messageIndex - 1;
    if (prevIndex >= 0) {
      return messages[prevIndex].id;
    }
    return null;
  };

  let DotColor;

  if (message) {
    if (message.type === "Personal")
      DotColor = dark
        ? "Dark_Custom_Success text-Dark-Main-Success"
        : "Bg_Custom_Success text-Light-Main-Success";
    else if (message.type === "Company")
      DotColor = dark
        ? "Dark_Bg_Primary text-Dark-Main-Primary"
        : "Bg_Bg_Primary text-Light-Main-Primary";
    else if (message.type === "Important")
      DotColor = dark
        ? "Dark_Custom_Warning text-Dark-Main-Warning"
        : "Bg_Custom_Warning text-Light-Main-Warning";
    else if (message.type === "Private")
      DotColor = dark
        ? "Dark_Custom_Error text-Dark-Main-Error"
        : "Bg_Custom_Error text-Light-Main-Error";
  }

  return (
    <div className="flex flex-row justify-between items-center h-[10%] py-4 px-5 border-b-Light-Other-Ouline_Border border-b dark:border-b-Dark-Other-Ouline_Border">
      <div className="flex items-center gap-5 overflow-hidden">
        <div className="cursor-pointer">
          <SlArrowLeft
            className="text-black dark:text-Dark-Main-Secondary"
            onClick={() =>
              navigate(`../../email${typeFilter ? `?type=${typeFilter}` : ""}`)
            }
          />
        </div>
        {!message ? (
          <div className="animate-pulse w-56 h-4 rounded-full bg-Light-Other-Body_Background dark:bg-Dark-Other-Body_Background"></div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:items-center overflow-hidden gap-2">
            <p className="text-Light-Text-Primary !font-semibold truncate dark:text-Dark-Text-Primary Body1">
              {message.jobTitle}
            </p>
            <span className={`${DotColor} rounded-full px-2 w-fit Baldge-Label`}>
              {message.type}
            </span>
          </div>
        )}
      </div>

      <div className="flex ml-auto">
        {getPrevId() ? (
          <Link to={`../../email/${getPrevId()}`}>
            <SlArrowLeft className="text-black dark:text-Dark-Main-Secondary" />
          </Link>
        ) : (
          <div className="w-4"></div>
        )}
        <div className="w-6"></div>
        {getNextId() && (
          <Link to={`../../email/${getNextId()}`}>
            <SlArrowLeft className="rotate-180 text-black dark:text-Dark-Main-Secondary" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ShowEmailHeader;
