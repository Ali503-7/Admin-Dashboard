import { Outlet } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../App";
import Nav from "../components/Nav/Nav";
import Aside from "../components/Aside/Aside";
import Footer from "../components/Footer";

const Dashbordlayout = () => {
  const {dark} = useContext(ThemeContext)
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className={dark ? "dark" : ""}>
      <div
        className=" bg-Light-Other-Body_Background dark:bg-Dark-Other-Body_Background "
        onScroll={(e) => handleScroll(e)}
      >
        <div className="flex flex-row">
          <aside className="w-[260px]">
            <Aside />
          </aside>

          <div className="grid grid-rows-[auto,1fr,auto] container max-w-[1370px] relative">
            <header className="z-50 sticky top-0">
              <Nav scrollTop={scrollTop} />
            </header>
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
