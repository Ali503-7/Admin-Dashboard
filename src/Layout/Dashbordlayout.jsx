import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
import Nav from "../components/Nav/Nav";
import Aside from '../components/Aside'
import Footer from "../components/Footer";

const Dashbordlayout = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="h-[100vh] bg-Light-Other-Body_Background dark:bg-Dark-Other-Body_Background grid grid-cols-6 grid-rows-[repeat(12,_minmax(0,_1fr))]">
        <nav className="col-start-2 col-span-5">
          <Nav />
        </nav>
        <aside className="row-span-full">
          <Aside />
        </aside>
        <main className="col-start-2 row-start-2 col-span-5 row-end-[12]">
          <Outlet />
        </main>
        <footer className="col-start-2 row-start-[12] col-span-5">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Dashbordlayout;
