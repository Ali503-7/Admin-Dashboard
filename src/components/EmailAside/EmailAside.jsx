import { BiEnvelope } from "react-icons/bi";
import { IoSendSharp } from "react-icons/io5";
import { RiBallPenLine } from "react-icons/ri";
import { AiOutlineStar, AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { EmailFilterAtom } from "../../atoms/EmailAtomFilter";
import { useNavigate, useSearchParams } from "react-router-dom";
// here will create the email page aside
const EmailAside = () => {
  const { dark } = useContext(ThemeContext);
  const [, setFilter] = EmailFilterAtom.useState();
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate()


  const HandelFilter = (text) => {
    if (text && text.target && text.target.getAttribute("data-key")) {
      const filterType = text.target.getAttribute("data-key");
      navigate("/email")
      setFilter(filterType);
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
    second: [
      {
        color: "Light-Main-Success",
        p: "Personal",
      },
      {
        color: "Light-Main-Primary",
        p: "Company",
      },
      {
        color: "Light-Main-Warning",
        p: "Important",
      },
      {
        color: "Light-Main-Error",
        p: "Private",
      },
    ],
  };

  const WithIcons = (array) => {
    return array.map((item, index) => {
      let NumStyle = "";
      if (item.num == "21")
        NumStyle = `${
          dark
            ? "Dark_Bg_Primary text-Dark-Main-Primary"
            : "Bg_Custom_primary text-Light-Main-Primary"
        }`;
      if (item.num == "1")
        NumStyle = `${
          dark
            ? "Dark_Custom_Warning text-Dark-Main-Warning"
            : "text-Light-Main-Warning Bg_Custom_Warning"
        }`;
      if (item.num == "6")
        NumStyle = `${
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
            <span
              className={`Baldge-Label ${NumStyle} px-[6.5px] rounded-full`}
            >
              {item.num}
            </span>
          )}
        </div>
      );
    });
  };

  const WithoutIcons = (array) => {
    return array.map((item, index) => {
      return (
        <div
          key={index}
          onClick={(data) => HandelFilter(data)}
          className="flex flex-row items-center gap-4 relative"
        >
          <div className={`w-3 h-3 bg-${item.color} rounded-full`}></div>
          <p className="Body1 text-Light-Text-Primary dark:text-Dark-Text-Primary">
            {item.p}
          </p>
          <div
            className="absolute cursor-pointer w-full h-full Body1 "
            data-key={item.p}
          ></div>
        </div>
      );
    });
  };

  return (
    <div className="xl:min-w-[260px] xl:translate-x-0 translate-x-full overflow-hidden w-0 ">
      <div className="p-5">
        <button className="Button-M w-full rounded-md  py-[7px] px-5 bg-Light-Main-Primary dark:bg-Dark-Main-Primary uppercase text-white">
          Compose
        </button>
      </div>
      <div className="flex flex-col py-[10px] gap-1">
        {WithIcons(Buttons.first)}
      </div>
      <div className="p-5">
        <div className="Caption text-Light-Text-Disabled dark:text-Dark-Text-Primary mb-1">
          LABELS
        </div>
        <div className="flex flex-col gap-1">
          {WithoutIcons(Buttons.second)}
        </div>
      </div>
    </div>
  );
};

export default EmailAside;
