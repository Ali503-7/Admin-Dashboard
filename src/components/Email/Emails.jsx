import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Emails = ({ emails }) => {
  const EmilComponent = () => {
    return emails.map((email) => {
      return (
        <Link
          to={email.id}
          key={email.id}
          className="py-4 px-5 flex flex-row items-center gap-[14px] border-b-[1px] text-Light-Text-Secondary dark:text-Dark-Text-Primary dark:border-b-Dark-Other-Divider border-b-Light-Other-Divider last:border-none cursor-pointer"
        >
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <AiOutlineStar className="w-6 h-6" />
          </div>
          <div>
            <img
              src={email.avatar}
              alt={email.name}
              className="w-8 j-8 rounded-full"
            />
          </div>
          <div className="flex flex-row gap-3 items-center mr-auto">
            <p className="text-Light-Text-Primary dark:text-Dark-Text-Primary Body1 !font-semibold">
              {email.name}
            </p>
            <p className="Body2">{email.email}</p>
          </div>
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="Caption">{email.time}</div>
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
