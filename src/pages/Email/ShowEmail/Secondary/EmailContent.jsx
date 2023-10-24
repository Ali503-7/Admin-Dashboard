import { MdAttachment } from "react-icons/md";
import { useMessageById } from "../../../../functions/useMassages";
import { PiDotsThreeVerticalBold, PiStarBold } from "react-icons/pi";

const EmailContent = ({ id }) => {
  const { message, massageState } = useMessageById(id);

  if (massageState == "loading") {
    return (
      <div className="text-Light-Main-Secondary dark:text-Dark-Main-Secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
        <div className="border-t-Light-Main-Primary  border-solid border-[2px] rounded-full animate-spin w-5 h-5 "></div>
        Loading...
      </div>
    );
  }

  if (massageState == "error") {
    return <div>Error fetch message with the id</div>;
  }
  return (
    <div className="bg-Light-Other-Divider py-5 dark:bg-Dark-Other-Divider h-[80%] overflow-y-auto overflow-x-hidden px-5">
      <div className="bg-Light-Other-Paper_Card rounded-md dark:bg-Dark-Other-Paper_Card dark:border-Dark-Other-Divider border-solid border overflow-hidden border-Light-Other-Divider shadow-Dark_5 mb-5">
        <div className="p-5 overflow-hidden flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-3 overflow-hidden">
            <img
              src={message.avatar}
              alt={message.name}
              className="w-[38px] h-[38px] rounded-full "
            />
            <div className="flex flex-col  overflow-hidden">
              <p className="Body1 !font-bold text-Light-Text-Secondary dark:text-Dark-Main-Secondary">
                {message.name}
              </p>
              <p className="Body2 text-Light-Text-Disabled dark:text-Dark-Text-Disabled truncate">
                {message.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="Body2 text-Light-Text-Disabled dark:text-Dark-Text-Disabled">
              {message.date} {message.time}
            </div>
            <div className="cursor-pointer after:flex flex-row justify-between items-center text-Light-Action-Active dark:text-Dark-Action-Active">
              <MdAttachment />
            </div>
            <div className="cursor-pointer flex flex-row justify-between items-center text-Light-Action-Active dark:text-Dark-Action-Active">
              <PiDotsThreeVerticalBold />
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-b border-Light-Other-Divider dark:border-Dark-Other-Divider"></div>
        {/* Message Litter */}
        <div className="whitespace-pre-line p-5 text-Light-Text-Secondary dark:text-Dark-Text-Primary Body1 !font-semibold">
          {message.massage}
        </div>
      </div>
      <div className="bg-Light-Other-Paper_Card rounded-md dark:bg-Dark-Other-Paper_Card dark:border-Dark-Other-Divider border-solid border border-Light-Other-Divider shadow-Dark_5">
        <p className="Body1 p-5 flex items-center text-Light-Text-Secondary dark:text-Dark-Text-Primary">
          Click here to
          <div className="text-Light-Main-Primary cursor-pointer font-semibold dark:text-Dark-Main-Primary mx-2">
            Reply
          </div>
          or
          <div className="text-Light-Main-Primary dark:text-Dark-Main-Primary mx-2 cursor-pointer font-semibold">
            Forward
          </div>
        </p>
      </div>
    </div>
  );
};

export default EmailContent;
