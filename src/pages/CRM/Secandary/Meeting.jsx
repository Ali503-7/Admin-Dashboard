import React, { useContext } from "react";
import Dots from "../../../components/Geniral/Dots";
import { ThemeContext } from "../../../App";
import { BsCalendar } from "react-icons/bs";
import img1 from "../../../assets/Imgs/avater/2.png";
import img2 from "../../../assets/Imgs/avater/4.png";
import img3 from "../../../assets/Imgs/avater/5.png";
import img4 from "../../../assets/Imgs/avater/8.png";
import img5 from "../../../assets/Imgs/avater/Avatar.png";
import img6 from "../../../assets/Imgs/avater/5.png";

const Meeting = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="Box sm:col-span-4">
      <Dots />
      <h1 className="H6 text-Light-Text-Primary dark:text-Dark-Text-Primary mb-5">
        Meeting Schedule
      </h1>
      <div className="flex flex-col gap-6 justify-between">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-3 items-center">
            <img
              src={img1}
              alt="Avatar"
              className="rounded-full w-[38px] h-[38px]"
            />

            <div>
              <p className="Body2 !font-semibold text-Light-Text-Primary dark:text-Dark-Text-Primary">
                Call with Woods
              </p>
              <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary flex flex-row gap-[6px]">
                <BsCalendar /> 21 Jul | 08:20-10:30
              </p>
            </div>
          </div>
          <span
            className={`Baldge-Label text-Light-Main-Primary dark:text-Dark-Main-Primary rounded-3xl px-[6.5px] ${
              dark ? "Dark_Bg_Primary" : "Bg_Custom_primary"
            }`}
          >
            Business
          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-3 items-center">
            <img
              src={img2}
              alt="Avatar"
              className="rounded-full w-[38px] h-[38px]"
            />
            <div>
              <p className="Body2 !font-semibold text-Light-Text-Primary dark:text-Dark-Text-Primary">
                Call with hilda
              </p>
              <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary flex flex-row gap-[6px]">
                <BsCalendar /> 21 Jul | 08:20-10:30
              </p>
            </div>
          </div>
          <span
            className={`Baldge-Label text-Light-Main-Success dark:text-Dark-Main-Success rounded-3xl px-[6.5px] Bg_Custom_Warning ${
              dark ? "Dark_Custom_Success" : "Bg_Custom_Success "
            }`}
          >
            {" "}
            Meditation
          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-3 items-center">
            <img
              src={img3}
              alt="Avatar"
              className="rounded-full w-[38px] h-[38px]"
            />
            <div>
              <p className="Body2 !font-semibold text-Light-Text-Primary dark:text-Dark-Text-Primary">
                Conference call
              </p>
              <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary flex flex-row gap-[6px]">
                <BsCalendar /> 21 Jul | 08:20-10:30
              </p>
            </div>
          </div>
          <span
            className={`Baldge-Label text-Light-Main-Warning dark:text-Dark-Main-Warning rounded-3xl px-[6.5px] ${
              dark ? "Dark_Custom_Warning" : "Bg_Custom_Warning"
            }`}
          >
            Dinner
          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-3 items-center">
            <img
              src={img4}
              alt="Avatar"
              className="rounded-full w-[38px] h-[38px]"
            />
            <div>
              <p className="Body2 !font-semibold text-Light-Text-Primary dark:text-Dark-Text-Primary">
                Meeting with Mark
              </p>
              <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary flex flex-row gap-[6px]">
                <BsCalendar /> 21 Jul | 08:20-10:30
              </p>
            </div>
          </div>
          <span
            className={`Baldge-Label text-Light-Main-Secondary dark:text-Dark-Main-Secondary rounded-3xl px-[6.5px] ${
              dark ? "Dark_Bg_Secondary" : "Bg_Custom_Secondary"
            }`}
          >
            Meetup
          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-3 items-center">
            <img
              src={img5}
              alt="Avatar"
              className="rounded-full w-[38px] h-[38px]"
            />
            <div>
              <p className="Body2 !font-semibold text-Light-Text-Primary dark:text-Dark-Text-Primary">
                Meeting in Oakland
              </p>
              <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary flex flex-row gap-[6px]">
                <BsCalendar /> 21 Jul | 08:20-10:30
              </p>
            </div>
          </div>
          <span
            className={`Baldge-Label text-Light-Main-Error dark:text-Dark-Main-Error rounded-3xl px-[6.5px] ${
              dark ? "Dark_Custom_Error" : "Bg_Custom_Error"
            }`}
          >
            Dinner
          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-3 items-center">
            <img
              src={img6}
              alt="Avatar"
              className="rounded-full w-[38px] h-[38px]"
            />
            <div>
              <p className="Body2 !font-semibold text-Light-Text-Primary dark:text-Dark-Text-Primary">
                Meeting with Carl
              </p>
              <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary flex flex-row gap-[6px]">
                <BsCalendar /> 21 Jul | 08:20-10:30
              </p>
            </div>
          </div>
          <span
            className={`Baldge-Label text-Light-Main-Primary dark:text-Dark-Main-Primary rounded-3xl px-[6.5px] ${
              dark ? "Dark_Bg_Primary" : "Bg_Custom_primary"
            }`}
          >
            Business
          </span>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
