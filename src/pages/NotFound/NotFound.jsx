import { Link } from "react-router-dom";
import img404 from "../../assets/Imgs/pages/404/404.png";
import tree from "../../assets/Imgs/pages/coming-soon/tree-2.png";
import misc from "../../assets/Imgs/pages/coming-soon/misc-mask-light.png";
import miscDark from "../../assets/Imgs/pages/coming-soon/misc-mask-dark.png";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const NotFound = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="w-full flex justify-center items-center flex-col  gap-8">
        <div className="text-center">
          <h1 className="text-Light-Text-Primary dark:text-Dark-Text-Primary H1 !text-[80px] !font-bold">
            404
          </h1>
          <h3 className="H5 text-Light-Text-Primary dark:text-Dark-Text-Primary mb-2">
            Page Not Found ⚠️
          </h3>
          <p className="text-Light-Text-Secondary dark:text-Dark-Text-Primary Body2">
            we couldn't find the page you are looking for
          </p>
        </div>
        <div>
          <img src={img404} alt="page not found" className="h-[55vh]" />
        </div>
        <Link
          to="/"
          className="py-2 px-10 bg-Light-Main-Primary text-white font-bold transition-colors text-sm rounded-md dark:hover:bg-Dark-Contained_Hover_Background-Primary hover:bg-Light-Contained_Hover_Background-Primary"
        >
          Home Page
        </Link>
      </div>
      <div className="absolute bottom-0">
        <img src={tree} className="absolute" />
        <img src={dark ? miscDark : misc} className="w-full h-full" />
      </div>
    </div>
  );
};

export default NotFound;
