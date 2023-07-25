import { useSearchParams } from "react-router-dom";
import { BiEnvelope } from "react-icons/bi";
import { IoSendSharp } from "react-icons/io5";
import { RiBallPenLine } from "react-icons/ri";
import { AiOutlineStar, AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { useContext } from "react";
import {ThemeContext} from '../../App'
// here will create the email page aside
const EmailAside = () => {
  const { dark } = useContext(ThemeContext)

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const HandelFilter = (text) => {
    if (text && text.target && text.target.getAttribute("data-key")) {
      const filterType = text.target.getAttribute("data-key");
      setSearchParams({ type: filterType });
    }
  };

  const Buttons = {
    first: [
      {
        p: "Inbox",
        icon: <BiEnvelope />,
        num: "21",
      },
      {
        p: "Sent",
        icon: <IoSendSharp />,
      },
      {
        p: "Draft",
        icon: <RiBallPenLine />,
        num: "1",
      },
      {
        p: "Starred",
        icon: <AiOutlineStar />,
      },
      {
        p: "Spam",
        icon: <AiOutlineExclamationCircle />,
        num: "6",
      },
      {
        p: "Trash",
        icon: <IoMdTrash />,
      },
    ],
    secend: [],
  };

  const WithIcons = () => {
    
    return Buttons.first.map((item, index) => {
      let NumStyle = "";
      if (item.num == "21") NumStyle = `${
        dark
          ? "Dark_Bg_Primary text-Dark-Main-Primary"
          : "Bg_Custom_primary text-Light-Main-Primary"
      }`;
      if (item.num == "1") NumStyle = `${
        dark
          ? "Dark_Custom_Warning text-Dark-Main-Warning"
          : "text-Light-Main-Warning Bg_Custom_Warning"
      }`;
      if (item.num == "6") NumStyle = `${
        dark
          ? "Dark_Custom_Error text-Dark-Main-Error"
          : "text-Light-Main-Error Bg_Custom_Error"
      }`;
      return (
        <div
          onClick={(data) => HandelFilter(data)}
          key={index}
          className="flex items-center justify-between px-5 relative"
        >
          <div
            className="absolute cursor-pointer w-full h-full Body1 "
            data-key={item.p}
          ></div>
          <div className="flex gap-5 items-center left-0 top-0 right-0 bottom-0 ">
            <div className="text-[20px] text-Light-Text-Primary dark:text-Dark-Text-Primary">
              {item.icon}
            </div>
            <p className="text-Light-Text-Primary dark:text-Dark-Text-Primary">
              {item.p}
            </p>
          </div>
          {item.num && (
            <span className={`Baldge-Label ${NumStyle} px-[6.5px] rounded-full` }>{item.num}</span>
          )}
        </div>
      );
    });
  };

  return (
    <div className="w-[260px] ">
      <div className="p-5">
        <button className="Button-M w-full rounded-md  py-[7px] px-5 bg-Light-Main-Primary dark:bg-Dark-Main-Primary uppercase text-white">
          Compose
        </button>
      </div>
      <div>{WithIcons()}</div>
      <div></div>
    </div>
  );
};

export default EmailAside;
