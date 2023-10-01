import { useContext } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { ThemeContext } from "../../../App";
import fakeemails from "../../../assets/Api/FakeEmailApi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ShowEmailHeader = ({ massage, id }) => {
  const { dark } = useContext(ThemeContext);

  const location = useLocation();
  const navigate = useNavigate();

  const getPreviousUrlWithFilters = () => {
    const currentSearchParams = new URLSearchParams(location.search);
    const previousPath = location.pathname;
    const newURL = `${previousPath}?${currentSearchParams.toString()}`;
    return newURL;
  };

  const handleGoBack = () => {
    const previousUrl = getPreviousUrlWithFilters();
    navigate(previousUrl);
  };


  let DotColor;
  if (massage.type === "Personal")
    DotColor = dark
      ? "Dark_Custom_Success text-Dark-Main-Success"
      : "Bg_Custom_Success text-Light-Main-Success";
  if (massage.type === "Company")
    DotColor = dark
      ? "Dark_Bg_Primary text-Dark-Main-Primary"
      : "Bg_Bg_Primary text-Light-Main-Primary";
  if (massage.type === "Important")
    DotColor = dark
      ? "Dark_Custom_Warning text-Dark-Main-Warning"
      : "Bg_Custom_Warning text-Light-Main-Warning";
  if (massage.type === "Private")
    DotColor = dark
      ? "Dark_Custom_Error text-Dark-Main-Error"
      : "Bg_Custom_Error text-Light-Main-Error";

  return (
    <div className="flex flex-row justify-between py-4 px-5">
      <div className="flex items-center gap-5">
        <Link to={handleGoBack} className="cursor-pointer">
          <SlArrowLeft className="text-black dark:text-Dark-Main-Secondary " />
        </Link>
        <p className="text-Light-Text-Primary dark:text-Dark-Text-Primary Body1">
          {massage.jobTitle}
        </p>
        <span className={`${DotColor} rounded-full px-2  Baldge-Label`}>
          {massage.type}
        </span>
      </div>

      <div className="flex gap-5">
        {id == 1 ? null : (
          <Link to={`../../email/${Number(id) - 1}`}>
            <SlArrowLeft className="text-black dark:text-Dark-Main-Secondary" />
          </Link>
        )}
        {id == fakeemails.length ? (
          <div className="w-4"></div>
        ) : (
          <Link to={`../../email/${Number(id) + 1}`}>
            <SlArrowLeft className="rotate-180 text-black dark:text-Dark-Main-Secondary" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ShowEmailHeader;
