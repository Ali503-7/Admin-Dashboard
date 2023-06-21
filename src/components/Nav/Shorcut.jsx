import { BiGridAlt } from "react-icons/bi";
import { IoAddCircleOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const Shortcut = ({ state }) => {
  const contentRef = useRef(null)

  useEffect(() => {
    const contentHeight = contentRef.current.scrollHeight;
    contentRef.current.style.maxHeight = state ? `${contentHeight}px` : "0px";
  }, [state]);

  return (
    <div
      className="text-xl text-Light-Text-Primary cursor-pointer rounded-full hover:bg-Light-Action-Hover dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover relative"
      data-value="shortcut"
    >
      <BiGridAlt
        data-value="shortcut"
        className="hover:bg-Light-Action-Hover p-2 rounded-full text-Light-Text-Primary cursor-pointer  dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover text-[36px]"
      />
      <div
        ref={contentRef}
        className="absolute shadow-Light_4 dark:shadow-Dark_4 bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card -left-[13.7em] top-8 w-[15em] rounded-md transition-Maxheight duration-500 overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 py-3">
          <p className="leading-[1.5] text-[1.125rem] font-semibold text-Light-Main-Secondary dark:text-Dark-Main-Secondary">
            Shortcuts
          </p>
          <IoAddCircleOutline />
        </div>
        <div className="grid w-full gap-x-[1px] gap-y-[1px] bg-Light-Other-Divider dark:bg-Dark-Other-Divider border-t-Light-Other-Divider dark:border-t-Dark-Other-Divider border-[1px] border-b-Light-Other-Divider dark:border-b-Dark-Other-Divider border-x-Light-Other-Paper_Card dark:border-x-Dark-Other-Paper_Card min-h-full max-h-[70vh] overflow-auto">
          <div className="flex flex-row gap-y-[1px] gap-x-[1px]">
            <Link className="bg-Light-Other-Paper_Card py-4 dark:bg-Dark-Other-Paper_Card flex items-center flex-col justify-center w-1/2 dark:hover:bg-Dark-Action-Hover hover:bg-Light-Action-Hover">
              <div className="bg-Light-Action-Selected dark:bg-Dark-Action-Selected w-12 h-12 rounded-full flex justify-center items-center">
                <SlCalender />
              </div>
              <p className="dark:text-Dark-Main-Secondary text-Light-Main-Secondary H6">
                Calender
              </p>
              <p className="Body2 dark:text-Dark-Main-Secondary text-Light-Main-Secondary">
                Appointments
              </p>
            </Link>
            <Link className="bg-Light-Other-Paper_Card py-4 dark:bg-Dark-Other-Paper_Card flex items-center flex-col justify-center w-1/2 dark:hover:bg-Dark-Action-Hover hover:bg-Light-Action-Hover">
              <div className="bg-Light-Action-Selected dark:bg-Dark-Action-Selected w-12 h-12 rounded-full flex justify-center items-center">
                <SlCalender />
              </div>
              <p className="dark:text-Dark-Main-Secondary text-Light-Main-Secondary H6">
                Calender
              </p>
              <p className="Body2 dark:text-Dark-Main-Secondary text-Light-Main-Secondary">
                Appointments
              </p>
            </Link>
          </div>
          <div className="flex flex-row gap-y-[1px] gap-x-[1px]">
            <Link
              to=""
              className="bg-Light-Other-Paper_Card py-4 dark:bg-Dark-Other-Paper_Card flex items-center flex-col justify-center w-1/2 dark:hover:bg-Dark-Action-Hover hover:bg-Light-Action-Hover "
            >
              <div className="bg-Light-Action-Selected dark:bg-Dark-Action-Selected w-12 h-12 rounded-full flex justify-center items-center">
                <SlCalender />
              </div>
              <p className="dark:text-Dark-Main-Secondary text-Light-Main-Secondary H6">
                Calender
              </p>
              <p className="Body2 dark:text-Dark-Main-Secondary text-Light-Main-Secondary">
                Appointments
              </p>
            </Link>
            <Link
              to=""
              className="bg-Light-Other-Paper_Card py-4 dark:bg-Dark-Other-Paper_Card flex items-center flex-col justify-center w-1/2 dark:hover:bg-Dark-Action-Hover hover:bg-Light-Action-Hover "
            >
              <div className="bg-Light-Action-Selected dark:bg-Dark-Action-Selected w-12 h-12 rounded-full flex justify-center items-center">
                <SlCalender />
              </div>
              <p className="dark:text-Dark-Main-Secondary text-Light-Main-Secondary H6">
                Calender
              </p>
              <p className="Body2 dark:text-Dark-Main-Secondary text-Light-Main-Secondary">
                Appointments
              </p>
            </Link>
          </div>
          <div className="flex flex-row gap-y-[1px] gap-x-[1px]">
            <Link
              to=""
              className="bg-Light-Other-Paper_Card py-4 dark:bg-Dark-Other-Paper_Card flex items-center flex-col justify-center w-1/2 dark:hover:bg-Dark-Action-Hover hover:bg-Light-Action-Hover "
            >
              <div className="bg-Light-Action-Selected dark:bg-Dark-Action-Selected w-12 h-12 rounded-full flex justify-center items-center">
                <SlCalender />
              </div>
              <p className="dark:text-Dark-Main-Secondary text-Light-Main-Secondary H6">
                Calender
              </p>
              <p className="Body2 dark:text-Dark-Main-Secondary text-Light-Main-Secondary">
                Appointments
              </p>
            </Link>
            <Link
              to=""
              className="bg-Light-Other-Paper_Card py-4 dark:bg-Dark-Other-Paper_Card flex items-center flex-col justify-center w-1/2 dark:hover:bg-Dark-Action-Hover hover:bg-Light-Action-Hover "
            >
              <div className="bg-Light-Action-Selected dark:bg-Dark-Action-Selected w-12 h-12 rounded-full flex justify-center items-center">
                <SlCalender />
              </div>
              <p className="dark:text-Dark-Main-Secondary text-Light-Main-Secondary H6">
                Calender
              </p>
              <p className="Body2 dark:text-Dark-Main-Secondary text-Light-Main-Secondary">
                Appointments
              </p>
            </Link>
          </div>
          <div className="flex flex-row gap-y-[1px] gap-x-[1px]">
            <Link
              to=""
              className="bg-Light-Other-Paper_Card py-4 dark:bg-Dark-Other-Paper_Card flex items-center flex-col justify-center w-1/2 dark:hover:bg-Dark-Action-Hover hover:bg-Light-Action-Hover"
            >
              <div className="bg-Light-Action-Selected dark:bg-Dark-Action-Selected w-12 h-12 rounded-full flex justify-center items-center">
                <SlCalender />
              </div>
              <p className="dark:text-Dark-Main-Secondary text-Light-Main-Secondary H6">
                Calender
              </p>
              <p className="Body2 dark:text-Dark-Main-Secondary text-Light-Main-Secondary">
                Appointments
              </p>
            </Link>
            <Link
              to=""
              className="bg-Light-Other-Paper_Card py-4 dark:bg-Dark-Other-Paper_Card flex items-center flex-col justify-center w-1/2 dark:hover:bg-Dark-Action-Hover hover:bg-Light-Action-Hover dark:hover:bg-"
            >
              <div className="bg-Light-Action-Selected dark:bg-Dark-Action-Selected w-12 h-12 rounded-full flex justify-center items-center">
                <SlCalender />
              </div>
              <p className="dark:text-Dark-Main-Secondary text-Light-Main-Secondary H6">
                Calender
              </p>
              <p className="Body2 dark:text-Dark-Main-Secondary text-Light-Main-Secondary">
                Appointments
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Shortcut.propTypes = {
  state: PropTypes.bool,
};

export default Shortcut;
