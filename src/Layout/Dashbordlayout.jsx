import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import Aside from "../components/Aside/Aside";
import Footer from "../components/Footer";

const Dashbordlayout = () => {
  const [aside, setAside] = useState(false);

  const location = useLocation();

  const email = location.pathname.includes("email");

  // useEffect to listen for URL changes
  useEffect(() => {
    // The following callback will be executed whenever the URL changes
    setAside(false);
  }, [location]);

  return (
    <div>
      <div
        className="min-h-screen bg-Light-Other-Body_Background dark:bg-Dark-Other-Body_Background "
        onScroll={(e) => handleScroll(e)}
      >
        <div className="flex flex-row min-h-screen relative">
          <div className="max-w-[0px] xl:min-w-[260px] ">
            <aside
              className={`xl:min-w-[260px] sticky left-0 top-0 xl:translate-x-0 h-screen transition-transform z-[100] bg-Light-Other-Body_Background dark:bg-Dark-Other-Body_Background ${
                aside ? "translate-x-0 !min-w-[260px]" : "-translate-x-64"
              }`}
            >
              <Aside
                className="sticky top-0 left-0"
                setAside={setAside}
                aside={aside}
              />
            </aside>
          </div>

          <div
            className={
              "flex flex-col min-h-screen container max-w-[1370px] relative " +
              (email && "max-h-screen")
            }
          >
            <header className="z-50 sticky top-0">
              <Nav aside={aside} setAside={setAside} />
            </header>
            <main className={`p-6 flex-grow ${email && "overflow-hidden"}`}>
              <ScrollRestoration />
              <Outlet />
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbordlayout;
