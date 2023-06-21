import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
import Nav from "../components/Nav/Nav";

const Layout = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-Light-Other-Body_Background dark:bg-Dark-Other-Body_Background">
        <Nav />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
