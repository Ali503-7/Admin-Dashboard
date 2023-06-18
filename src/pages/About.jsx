import { useContext } from "react";
import { ThemeContext } from "../App";
const About = () => {
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <div>
      <h1 className="w-12 h-12 bg-white text-black dark:bg-black dark:text-white">
        About
        <div>{dark ? "Dark": "Light"}</div>
      </h1>
      <button onClick={() => setDark((prev) => !prev)}>Switch</button>
    </div>
  );
};

export default About;
