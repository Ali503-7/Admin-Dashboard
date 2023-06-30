import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
import Nav from "../components/Nav/Nav";
import Aside from "../components/Aside/Aside";
import Footer from "../components/Footer";

const Dashbordlayout = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? "dark" : ""}>
      <div className=" bg-Light-Other-Body_Background dark:bg-Dark-Other-Body_Background ">
        <div className="container flex flex-row h-[100vh]">
          <aside className="w-[260px]">
            <Aside />
          </aside>

          <div className="flex flex-col justify-between w-full">
            <nav className="">
              <Nav />
            </nav>
            <main className="h-full p-6">
              <Outlet />
            </main>
            <footer className="">
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbordlayout;
