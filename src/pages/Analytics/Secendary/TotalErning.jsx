import Dots from "../../../components/Geniral/Dots";
import { RiArrowUpSFill } from 'react-icons/ri'
import Img1 from "../../../assets/Imgs/cards/logo-aviato.png"
import Img2 from "../../../assets/Imgs/cards/logo-bitbank.png";
import Img3 from "../../../assets/Imgs/cards/logo-zipcar.png";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const TotalErning = () => {
  const {dark} = useContext(ThemeContext)
  return (
    <div className="col-span-4 Box">
      <Dots />
      <h6 className="H6 pb-5">Total Earning</h6>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <h4 className="H4 flex items-center">
            $24,895
            <RiArrowUpSFill className="text-Light-Main-Success dark:text-Dark-Main-Success Body2 font-semibold" />
            <span className="text-Light-Main-Success dark:text-Dark-Main-Success Body2 font-semibold">
              10%
            </span>
          </h4>
          <span className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary">
            Compared to $84,325 last year
          </span>
        </div>

        <div className="py-[10px] flex felx-row justify-between">
          <div className="flex flex-row gap-3">
            <div className="w-10 h-10 bg-[rgba(58,53,65,0.04)] dark:bg-[rgba(231,227,252,0.04)] flex items-center justify-center rounded-md">
              <img src={Img1} alt="Bank" className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <h5 className="Body2 !font-semibold">Aviato</h5>
              <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary">
                HTML & Anguler
              </p>
            </div>
          </div>
          <div className="w-fit flex flex-col gap-2">
            <h6 className="Body2 !font-semibold">$1,2450.80</h6>
            <div
              className={`relative w-full h-1  ${
                dark ? "Dark_Bg_Secondary" : "Bg_Custom_Secondary"
              }`}
            >
              <div className="absolute bg-Light-Main-Secondary dark:bg-Dark-Main-Secondary top-0 left-0 h-full w-[60%]"></div>
            </div>
          </div>
        </div>

        <div className="py-[10px] flex felx-row justify-between">
          <div className="flex flex-row gap-3">
            <div className="w-10 h-10 bg-[rgba(58,53,65,0.04)] dark:bg-[rgba(231,227,252,0.04)] flex items-center justify-center rounded-md">
              <img src={Img2} alt="Bank" className="w-5 h-7" />
            </div>
            <div className="flex flex-col">
              <h5 className="Body2 !font-semibold">Bitbank</h5>
              <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary">
                Sketch, Figma & XD
              </p>
            </div>
          </div>
          <div className="w-fit flex flex-col gap-2">
            <h6 className="Body2 !font-semibold">$8,6500.20</h6>
            <div
              className={`relative w-full h-1  ${
                dark ? "Dark_Bg_Info" : "Bg_Custom_Info"
              }`}
            >
              <div className="absolute bg-Light-Main-Info dark:bg-Dark-Main-Info top-0 left-0 h-full w-[80%]"></div>
            </div>
          </div>
        </div>

        <div className="py-[10px] flex felx-row justify-between">
          <div className="flex flex-row gap-3">
            <div className="w-10 h-10 bg-[rgba(58,53,65,0.04)] dark:bg-[rgba(231,227,252,0.04)] flex items-center justify-center rounded-md">
              <img src={Img3} alt="Bank" className="w-7sssssssss h-6" />
            </div>
            <div className="flex flex-col">
              <h5 className="Body2 !font-semibold">Zipcar</h5>
              <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary">
                Vuejs, React & HTML
              </p>
            </div>
          </div>
          <div className="w-fit flex flex-col gap-2">
            <h6 className="Body2 !font-semibold">$1,2450.80</h6>
            <div
              className={`relative w-full h-1  ${
                dark ? "Dark_Bg_Primary" : "Bg_Custom_primary"
              }`}
            >
              <div className="absolute bg-Light-Main-Primary dark:bg-Dark-Main-Primary top-0 left-0 h-full w-[45%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalErning;
