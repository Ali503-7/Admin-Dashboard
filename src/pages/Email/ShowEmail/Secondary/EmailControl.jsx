import {
  PiTrashSimpleBold,
  PiEnvelopeSimpleBold,
  PiFolderSimpleBold,
  PiTagSimpleBold,
  PiStarBold,
  PiDotsThreeVerticalBold,
} from "react-icons/pi";

const EmailControl = () => {
  return (
    <div className="py-4 px-5 flex flex-row justify-between items-center text-Light-Action-Active dark:text-Dark-Action-Active border-b h-[10%] border-Light-Other-Ouline_Border dark:border-Dark-Other-Ouline_Border">
      <div className="flex gap-3 text-[20px]">
        <div className="cursor-pointer">
          <PiTrashSimpleBold />
        </div>
        <div className="cursor-pointer">
          <PiEnvelopeSimpleBold />
        </div>
        <div className="cursor-pointer">
          <PiFolderSimpleBold />
        </div>
        <div className="cursor-pointer">
          <PiTagSimpleBold />
        </div>
      </div>
      <div className="flex gap-3 text-[20px]">
        <div className="cursor-pointer">
          <PiStarBold />
        </div>
        <div className="cursor-pointer">
          <PiDotsThreeVerticalBold />
        </div>
      </div>
    </div>
  );
};

export default EmailControl;
