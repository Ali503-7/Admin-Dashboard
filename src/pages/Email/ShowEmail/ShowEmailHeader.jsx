import React from "react";
import { useContext } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { ThemeContext } from "../../../App";
import { Link } from "react-router-dom";
import { EmailFilterAtom } from "../../../atoms/EmailAtomFilter";
import useMessages from "../../../functions/useMassages";

const ShowEmailHeader = ({ id }) => {
  const { dark } = useContext(ThemeContext);
  const typeFilter = EmailFilterAtom.useValue();
  const massages = useMessages(typeFilter);

  // Check if massage with the given 'id' exists
  const massage = massages.find((email) => email.id === id);

  if (!massage) {
    // Handle the case where the email with 'id' is not found.
    return (
      <div className="flex flex-row justify-between py-4 px-5">
        <div>No email found with the provided ID.</div>
      </div>
    );
  }

  const getNextId = () => {
    let nextIndex = massages.map((item) => item.id).indexOf(massage.id) + 1;
    if (nextIndex >= massages.length || !massages[nextIndex]) return null;
    return massages[nextIndex].id;
  };

  const getPrevId = () => {
    let prevIndex = massages.map((item) => item.id).indexOf(massage.id) - 1;
    if (prevIndex < 0 || !massages[prevIndex]) return null;
    return massages[prevIndex].id;
  };

  let DotColor;
  if (massage.type === "Personal")
    DotColor = dark
      ? "Dark_Custom_Success text-Dark-Main-Success"
      : "Bg_Custom_Success text-Light-Main-Success";
  if (massage.type === "Company")
    DotColor = dark
      ? "Dark_Bg_Primary text-Dark-Main-Primary"
      : "Bg_Bg_Primary text-Light-Main-Primary";
  if (massage.type === "Important")
    DotColor = dark
      ? "Dark_Custom_Warning text-Dark-Main-Warning"
      : "Bg_Custom_Warning text-Light-Main-Warning";
  if (massage.type === "Private")
    DotColor = dark
      ? "Dark_Custom_Error text-Dark-Main-Error"
      : "Bg_Custom_Error text-Light-Main-Error";

  return (
    <div className="flex flex-row justify-between py-4 px-5">
      <div className="flex items-center gap-5">
        <div className="cursor-pointer">
          <SlArrowLeft className="text-black dark:text-Dark-Main-Secondary" />
        </div>
        <p className="text-Light-Text-Primary dark:text-Dark-Text-Primary Body1">
          {massage.jobTitle}
        </p>
        <span className={`${DotColor} rounded-full px-2  Baldge-Label`}>
          {massage.type}
        </span>
      </div>

      <div className="flex gap-5">
        {getPrevId() && (
          <Link to={`../../email/${getPrevId()}`}>
            <SlArrowLeft className="text-black dark:text-Dark-Main-Secondary" />
          </Link>
        )}
        {getNextId() === null ? (
          <div className="w-4"></div>
        ) : (
          <Link to={`../../email/${getNextId()}`}>
            <SlArrowLeft className="rotate-180 text-black dark:text-Dark-Main-Secondary" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ShowEmailHeader;
