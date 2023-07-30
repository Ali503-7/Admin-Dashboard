import User from "../../assets/Imgs/avater/Avatar.png";
import { Link } from "react-router-dom";
import {
  FaRegUser,
  FaRegEnvelope,
  FaDollarSign,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { BsChatLeft } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Profile = ({ state, setStates }) => {
  const handleLinkClick = (e) => {
    e.preventDefault();

    setStates((prevState) => ({
      ...prevState,
      profile: !prevState.profile,
    }));
  };

  return (
    <div data-value="profile" className="relative">
      <div>
        <img
          src={User}
          alt="Avatar"
          className="w-10 h-10 m-2 rounded-full cursor-pointer"
          data-value="profile"
        />
        <div className="w-2 h-2 bg-Light-Main-Success dark:bg-Dark-Main-Success absolute rounded-full outline outline-Light-Other-Paper_Card dark:outline-Dark-Other-Paper_Card bottom-3 right-2"></div>
      </div>

      {/* Start the list */}

      <div
        className={`absolute shadow-Light_4 dark:shadow-Dark_4 bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card right-[.5em] top-15 rounded-md duration-500 transition-Maxheight overflow-hidden z-10 ${
          state ? "w-[150px] max-h-[470px]" : "w-[0px] max-h-[0px]"
        }`}
      >
        <div>
          <div className="flex justify-start items-center border-b border-Light-Other-Divider dark:border-Dark-Other-Divider">
            <div className="relative">
              <img
                src={User}
                alt="User"
                className="w-10 h-10 m-2 rounded-full cursor-pointer"
              />
              <div className="w-2 h-2 bg-Light-Main-Success dark:bg-Dark-Main-Success absolute rounded-full outline outline-Light-Other-Paper_Card dark:outline-Dark-Other-Paper_Card bottom-3 right-2"></div>
            </div>
            <div className="">
              <p className="Body2 text-Light-Text-Primary dark:text-Dark-Text-Primary">
                Ali Mo
              </p>
              <p className="Capion text-Light-Text-Disabled dark:text-Dark-Text-Primary">
                Admin
              </p>
            </div>
          </div>
          <div className="border-b border-Light-Other-Divider dark:border-Dark-Other-Divider">
            <ul>
              <li onClick={handleLinkClick}>
                <Link className="Body1 text-Light-Text-Primary dark:text-Dark-Text-Primary flex items-center gap-2 pl-2 hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover py-1">
                  <FaRegUser />
                  Profile
                </Link>
              </li>

              <li onClick={handleLinkClick}>
                <Link
                  to="/email?type=Inbox"
                  className="Body1 text-Light-Text-Primary dark:text-Dark-Text-Primary flex items-center gap-2 pl-2 hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover py-1"
                >
                  <FaRegEnvelope />
                  inbox
                </Link>
              </li>

              <Link
                onClick={handleLinkClick}
                className="Body1 text-Light-Text-Primary dark:text-Dark-Text-Primary flex items-center gap-2 pl-2 hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover py-1"
              >
                <BsChatLeft />
                Chat
              </Link>
            </ul>
          </div>
          <div className="border-b border-Light-Other-Divider dark:border-Dark-Other-Divider">
            <ul>
              <Link
                onClick={handleLinkClick}
                className="Body1 text-Light-Text-Primary dark:text-Dark-Text-Primary flex items-center gap-2 pl-2 hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover py-1"
              >
                <FiSettings />
                Settings
              </Link>
              <Link className="Body1 text-Light-Text-Primary dark:text-Dark-Text-Primary flex items-center gap-2 pl-2 hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover py-1">
                <FaDollarSign />
                Pricing
              </Link>
              <Link className="Body1 text-Light-Text-Primary dark:text-Dark-Text-Primary flex items-center gap-2 pl-2 hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover py-1">
                <FaRegQuestionCircle />
                FAQ
              </Link>
            </ul>
          </div>
          <Link className="Body1 text-Light-Text-Primary dark:text-Dark-Text-Primary flex items-center gap-2 pl-2 hover:bg-Light-Action-Hover dark:hover:bg-Dark-Action-Hover py-1">
            <MdLogout />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
