import { FaRegBell } from "react-icons/fa";
import PropTypes from "prop-types";

const Notification = ({ state }) => {
  return (
    <div
      className="text-xl text-Light-Text-Primary cursor-pointer p-2 rounded-full hover:bg-Light-Action-Hover relative dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover"
      data-value="notification"
    >
      <FaRegBell data-value="notification" />
      <div className="w-[7.5px] h-[7.5px] absolute bg-Light-Main-Error dark:outline-Dark-Other-Body_Background rounded-full outline outline-[1.5px] top-1/4 right-1/4 outline-Light-Other-Body_Background"></div>
    </div>
  );
};

Notification.PropTypes = {
  state: PropTypes.pool,
};

export default Notification