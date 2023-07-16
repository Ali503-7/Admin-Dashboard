import { useState } from "react";
import Lang from "./Lang";
import Dark from "./Dark";
import Shortcut from "./Shorcut";
import Notification from "./Notifcation";
import Profile from "./Profile";
import Search from "./Search";

const Nav = ({ scrollTop }) => {
  // Initialize the states using the useState hook
  const [states, setStates] = useState({
    lang: false,
    shortcut: false,
    notification: false,
    profile: false,
  });

  // Destructure the state values for convenience
  const { lang, shortcut, notification, profile } = states;

  // Define a function to handle state changes based on the clicked element
  const StateHandel = (label) => {
    // Retrieve the "data-value" attribute from the clicked element or its parent
    let seter =
      label.target.getAttribute("data-value") ||
      label.target.parentElement.getAttribute("data-value");

    // Check if the value contains "Dark"
    if (seter.includes("Dark")) return; // Ignore the value and exit the function
    // Create a new object with all states set to false
    const updatedStates = Object.fromEntries(
      // eslint-disable-next-line no-unused-vars
      Object.entries(states).map(([key, value]) => [key, false])
    );

    // Set the selected state to true in the updated states object
    updatedStates[seter] = !states[seter];

    // Update the states using the setStates function
    setStates(updatedStates);
  };

  return (
    <div
      className={
        scrollTop != 0
          ? "dark:!bg-[rgba(40,36,61,0.85)] !bg-[rgba(255,255,255,0.85)] dark:shadow-[rgba(21,_19,_35,_0.42)] shadow-[rgba(58,_53,_65,_0.42)] shadow-[0px_4px_8px_-4px] backdrop-blur-[7.5px] rounded-b-[10px] px-3 mx-6 transition-all"
          : "transition-all"
      }
    >
      <div className="flex flex-row justify-between items-center z-50">
        <Search />
        <div
          className="flex flex-row items-center"
          onClick={(e) => StateHandel(e)}
        >
          <Lang state={lang} />
          <Dark />
          <Shortcut state={shortcut} />
          <Notification state={notification} />
          <Profile state={profile} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
