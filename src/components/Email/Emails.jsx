import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Emails = ({ emails }) => {

  

  const EmilComponent = () => {
    return emails.map((email) => {
      let DotColor = "";
      if (email.type === "Personal") DotColor = "bg-Light-Main-Success";
      if (email.type === "Company") DotColor = "bg-Light-Main-Primary";
      if (email.type === "Important") DotColor = "bg-Light-Main-Warning";
      if (email.type === "Private") DotColor = "bg-Light-Main-Error";

      return (
        <div
          key={email.id}
          className={`py-4 px-5 relative flex flex-row items-center gap-[14px] border-b-[1px] text-Light-Text-Secondary dark:text-Dark-Text-Primary dark:border-b-Dark-Other-Divider border-b-Light-Other-Divider last:border-none cursor-pointer hover:shadow-Light_3 dark:hover:shadow-Dark_3 transition-shadow duration-200 ${
            !email.readState &&
            "bg-Light-Action-Hover dark:bg-Dark-Action-Hover"
          }`}
        >
          <Link
            to={email.id}
            className="absolute w-full h-full left-0 top-0 right-0 bottom-0 z-10"
          ></Link>
          <div className="w-fit z-20">
            <input type="checkbox" name="" id="" />
          </div>
          <div className="w-fit z-20">
            <AiOutlineStar
              className={`w-6 h-6 hidden sm:block ${email.starred && "text-Light-Main-Warning dark:text-Light-Main-Warning"}`}
            />
          </div>
          <div className="w-fit z-20">
            <img
              src={email.avatar}
              alt={email.name}
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="flex flex-col flex-1 w-px overflow-hidden">
            <p className="text-Light-Text-Primary dark:text-Dark-Text-Primary Body1 !font-semibold truncate w-full">
              {email.name}
            </p>
            <p className="Body2 block truncate w-full">{email.jobTitle}</p>
          </div>
          <div className={`sm:w-2 sm:h-2 ${DotColor} rounded-full`}></div>
          <div className="Caption min-w-fit">{email.time}</div>
        </div>
      );
    });
  };

  return (
    <div className="overflow-auto flex flex-col sm:max-h-[65vh] wax-h-full">
      {EmilComponent()}
    </div>
  );
};

export default Emails;
