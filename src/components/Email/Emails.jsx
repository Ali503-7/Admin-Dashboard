import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Emails = ({ emails }) => {
  const EmilComponent = () => {
    return emails.map((email) => {
      let DotColor = ""
      if (email.type === "Personal") DotColor = "bg-Light-Main-Success";
      if (email.type === "Company") DotColor = "bg-Light-Main-Primary";
      if (email.type === "Important") DotColor = "bg-Light-Main-Warning";
      if (email.type === "Private") DotColor = "bg-Light-Main-Error";
      

      return (
        <Link
          to={email.id}
          key={email.id}
          className={`py-4 px-5 flex flex-row items-center gap-[14px] border-b-[1px] text-Light-Text-Secondary dark:text-Dark-Text-Primary dark:border-b-Dark-Other-Divider border-b-Light-Other-Divider last:border-none cursor-pointer hover:shadow-Light_3 dark:hover:shadow-Dark_3 transition-shadow duration-200 ${
            !email.readState &&
            "bg-Light-Action-Hover dark:bg-Dark-Action-Hover"
          }`}
        >
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <AiOutlineStar className="w-6 h-6 hidden sm:block" />
          </div>
          <div>
            <img
              src={email.avatar}
              alt={email.name}
              className="w-8 rounded-full"
            />
          </div>
          <div className="flex sm:flex-row flex-col w-full sm:gap-3 xl:items-center mr-auto overflow-hidden">
            <p className="text-Light-Text-Primary dark:text-Dark-Text-Primary Body1 !font-semibold truncate block">
              {email.name}
            </p>
            <p className="Body2 truncate block ">{email.jobTitle}</p>
          </div>
          <div className={`sm:w-2 sm:h-2 ${DotColor} rounded-full`}></div>
          <div className="Caption min-w-fit">{email.time}</div>
        </Link>
      );
    });
  };

  return (
    <div className="overflow-auto flex flex-col max-h-[442px]">
      {EmilComponent()}
    </div>
  );
};

export default Emails;
