import { useContext } from "react";
import { ThemeContext } from "../App";

const Home = () => {
  const { setDark } = useContext(ThemeContext);
  return (
    <div>
      <h1 className="w-12 h-12 bg-white text-black dark:bg-black dark:text-white">Home</h1>
      <button onClick={() => setDark((pre) => !pre)}>Switch</button>
    </div>
  );
};

export default Home;
