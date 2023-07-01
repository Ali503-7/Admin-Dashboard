import { FaRegBell } from "react-icons/fa";
import { ThemeContext } from "../../App";
import { useContext, useState } from "react";
import Av1 from "../../assets/Imgs/avater/2.png";
import Av2 from "../../assets/Imgs/avater/4.png";
import Av3 from "../../assets/Imgs/avater/5.png";
import Av4 from "../../assets/Imgs/avater/8.png";
import PayPal from "../../assets/Imgs/Logo/paypal.png";
import Finance from "../../assets/Imgs/Logo/chart.png";

const NotiData = [
  {
    Img: Av4,
    Name: "Congratulation Flora! 🎉",
    Time: "Today",
    dis: "Won the monthly best seller badge",
  },
  {
    Img: Av1,
    Name: "New user registered.",
    Time: "Yesterday",
    dis: "5 hours ago",
  },
  {
    Img: Av2,
    Name: "Received Order 📦",
    Time: "19 Mar",
    dis: "New order received from John",
  },
  {
    Img: PayPal,
    Name: "Paypal",
    Time: "25 May",
    dis: "Received Payment",
  },
  {
    Img: Av3,
    Name: "New message received 👋🏻",
    Time: "11 Aug",
    dis: "You have 10 unread messages",
  },
  {
    Img: Finance,
    Name: "Finance report has been generated",
    Time: "27 Dec",
    dis: "25 hrs ago",
  },
];

const NotiFunc = () => {
  return NotiData.map((Note, index) => {
    return (
      <div
        key={index}
        className="py-4 px-3 border-b border-Light-Other-Divider dark:border-Dark-Other-Divider dark:hover:bg-Dark-Action-Hover hover:bg-Light-Action-Hover"
      >
        <div className="grid grid-cols-[40px_1fr_auto] items-center gap-[10px]">
          <div className="justify-self-start">
            <img
              src={Note.Img}
              alt={index}
              className="rounded-full w-10 h-10"
            />
          </div>
          <div>
            <p className="Body2 text-Light-Text-Primary dark:text-Dark-Text-Primary truncate w-[15em]">
              {Note.Name}
            </p>
            <p className="Capion text-Light-Text-Secondary dark:text-Dark-Text-Primary">
              {Note.dis}
            </p>
          </div>
          <div className="Capion text-Light-Text-Disabled dark:text-Dark-Text-Primary truncate">
            {Note.Time}
          </div>
        </div>
      </div>
    );
  });
};

/* eslint-disable react/prop-types */
const Notification = ({ state }) => {
  const { dark } = useContext(ThemeContext);
  const [readed, setReaded] = useState(true);

  return (
    <div
      className="text-xl text-Light-Text-Primary cursor-pointer rounded-full hover:bg-Light-Action-Hover relative dark:text-Dark-Text-Primary "
      data-value="notification"
    >
      <FaRegBell
        data-value="notification"
        className="hover:bg-Light-Action-Hover p-2 rounded-full text-Light-Text-Primary cursor-pointer  dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover text-[36px]"
      />
      {readed ? (
        <div className="w-[7.5px] h-[7.5px] absolute bg-Light-Main-Error dark:outline-Dark-Other-Body_Background rounded-full outline outline-[1.5px] top-1/4 right-1/4 outline-Light-Other-Body_Background"></div>
      ) : null}

      {/* Start the List */}

      <div
        className={`absolute shadow-Light_4 dark:shadow-Dark_4 bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card right-[.5em] top-8 rounded-md duration-500 transition-Maxheight overflow-hidden z-10 ${
          state ? "w-[19em] max-h-[470px]" : "w-[0em] max-h-[0px]"
        }`}
      >
        <div className="flex flex-row justify-between p-2 items-center overflow-hidden border-b border-Light-Other-Divider dark:border-Dark-Other-Divider">
          <p className="Body2">Notifications</p>
          {readed ? (
            <span
              className={`overflow-hidden h-[20px] w-[51px] rounded-xl Baldge-Label text-Light-Main-Primary dark:text-Dark-Main-Primary flex justify-center items-center ${
                dark ? "Dark_Bg_Span" : "Bg_Span"
              }`}
            >
              6 New
            </span>
          ) : null}
        </div>
        <div className="h-[365px] overflow-auto">
          {readed ? (
            NotiFunc()
          ) : (
            <p className="text-Light-Main-Info h-full flex justify-center items-center dark:text-Dark-Main-Info">
              there is no notifcations
            </p>
          )}
        </div>
        {readed ? (
          <div className="py-4 px-5 flex justify-center items-center">
            <button
              className="dark:bg-Dark-Light-Primary bg-Light-Dark-Primary shadow-Light_3 dark:shadow-Dark_3 text-Dark-Text-Primary Button-M w-full h-[36px] rounded-md"
              onClick={() => setReaded((prev) => !prev)}
            >
              READ ALL NOTIFICATIONS
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Notification;
