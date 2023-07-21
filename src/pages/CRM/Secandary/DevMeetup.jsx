import { useContext } from "react";
import WorkSpace from "../../../assets/Imgs/cards/workstation.png";
import { ThemeContext } from "../../../App";
import { AiOutlineStar, AiOutlineClockCircle } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const DevMeetup = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div className="lg:col-span-4 sm:col-span-8 bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card shadow-Light_6 dark:shadow-Dark_6 rounded-md relative ">
      {/* Img */}
      <img src={WorkSpace} alt="" />
      <div className=" p-5 ">
        {/* bot */}
        <div>
          <div className="flex flex-row gap-4 items-center pb-4 border-b border-solid border-Light-Other-Divider dark:border-Dark-Other-Divider">
            <div
              className={`flex flex-col items-center justify-center text-center  p-[10px] h-[56px] w-[50px] rounded-md text-Light-Main-Primary dark:text-Dark-Main-Primary ${
                dark ? "Dark_Bg_Primary" : "Bg_Custom_primary"
              }`}
            >
              <span className="Body2 pt-[10px] ">Jan</span>{" "}
              <span className="H6 pb-[6px]">24</span>
            </div>
            <div>
              <h6 className="Body1 !font-semibold">Developer Meetup</h6>
              <p className="Caption">
                The WordPress open source,free software project is the community
                behind the…
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-row justify-between border-b border-solid border-Light-Other-Divider dark:border-Dark-Other-Divider">
            <div className="flex flex-col text-Light-Text-Secondary dark:text-Dark-Text-Primary Caption items-center cursor-pointer">
              <AiOutlineStar className="w-5 h-5" />
              <p>Intrested</p>
            </div>
            <div className="flex flex-col text-Light-Text-Secondary dark:text-Dark-Text-Primary Caption items-center cursor-pointer">
              <BsCheckCircle className="w-5 h-5" />
              <p>Joined</p>
            </div>
            <div className="text-Light-Main-Primary dark:text-Dark-Main-Primary Caption flex flex-col items-center cursor-pointer">
              <RiUser3Line className="w-5 h-5 text-Light-Main-Primary dark:text-Dark-Main-Primary" />
              <p>Invited</p>
            </div>
            <div className="text-Light-Text-Secondary dark:text-Dark-Text-Primary Caption flex flex-col items-center cursor-pointer">
              <BsThreeDots className="w-5 h-5" />
              <p>More</p>
            </div>
          </div>
          <div className="pt-4 flex flex-col gap-2">
            <div className="flex flex-row items-start gap-[10px]">
              <AiOutlineClockCircle className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary w-5 h-5" />
              <div>
                <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary">
                  Tuesday, 24 january, 10:20 - 12:30
                </p>
                <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary">
                  After 1 week
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-[10px]">
              <IoLocationOutline className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary w-5 h-5" />
              <div>
                <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary">
                  The Rochard NYC
                </p>
                <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary">
                  1305 Lexington Ave, New York
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevMeetup;
