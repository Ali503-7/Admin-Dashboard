import comingSoonImg from "../../assets/Imgs/pages/coming-soon/misc-coming-soon.png";
import tree from "../../assets/Imgs/pages/coming-soon/tree-2.png"
import misc from "../../assets/Imgs/pages/coming-soon/misc-mask-light.png"
import miscDark from "../../assets/Imgs/pages/coming-soon/misc-mask-dark.png"
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { Link } from "react-router-dom";

const LaunchingSoon = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="w-full flex justify-center items-center flex-col pt-[90px] gap-8">
        <div className="text-center">
          <h3 className="H5 text-Light-Text-Primary dark:text-Dark-Text-Primary">
            We are launching soon 🚀
          </h3>
          <p className="text-Light-Text-Secondary dark:text-Dark-Text-Primary Body2">
            Our website is opening soon. Please register to get notified when
            it′s ready!
          </p>
        </div>
        <div>
          <img src={comingSoonImg} alt="coming soon" className="h-[55vh]" />
        </div>
        <Link
          to="/"
          onClick={() => console.log("i'm working")}
          className="py-2 px-10 bg-Light-Main-Primary text-white font-bold transition-colors text-sm rounded-md dark:hover:bg-Dark-Contained_Hover_Background-Primary hover:bg-Light-Contained_Hover_Background-Primary z-10"
        >
          Home Page
        </Link>
      </div>
      <div className="absolute bottom-0">
        <img src={tree} className="absolute" />
        <img src={dark ? miscDark : misc } className="w-full h-full" />
      </div>
    </div>
  );
};

export default LaunchingSoon;
