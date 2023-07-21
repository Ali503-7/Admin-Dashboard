import { useContext } from "react";
import Dots from "../../../components/Geniral/Dots";
import { ThemeContext } from "../../../App";
import Bag from "../../../assets/Imgs/Bag.png";
import Bank1 from "../../../assets/Imgs/Logo/logo-mastercard-small.png";
import Bank2 from "../../../assets/Imgs/Logo/logo-credit-card-2.png";

const UpgradePlan = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div className="lg:col-span-4 sm:col-span-6 Box flex flex-col justify-between">
      <Dots />
      <h1 className="mb-5 H6">Upgrade Your Plan</h1>
      <div className="flex flex-col gap-[14px]">
        <div className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary">
          Plase make the payment to start enjoying all the features of our
          premuim plan as soon as possible.
        </div>
        <div
          className={`p-[10px] flex flex-row justify-between gap-3 rounded-md ${
            dark ? "Dark_Bg_Primary" : "Bg_Custom_primary"
          }`}
        >
          <div className="flex flex-row items-center gap-3">
            <div className=" p-[9px] border border-Light-Light-Primary rounded-md">
              <img src={Bag} alt="Bag" className="w-[23px] h-5" />
            </div>
            <div>
              <p className="Body2 !font-semibold text-Light-Text-Primary dark:text-Dark-Text-Primary">
                Platinum
              </p>
              <p className="Caption text-Light-Main-Primary dark:text-Dark-Main-Primary">
                Upgrade Plan
              </p>
            </div>
          </div>
          <div className="text-Light-Text-Primary dark:text-Dark-Text-Primary flex flex-row">
            <span className="Body2">$</span>
            <p className="text-[24px] font-normal">5,250</p>
            <span className="text-[15px] font-normal self-end pb-1">/Year</span>
          </div>
        </div>
        <div className="flex flex-col gap-[9px]">
          <h1 className="Body2 !font-semibold">Payment details</h1>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-3">
              <img src={Bank1} alt="Bank" className="w-[42px] h-[30px]" />
              <div>
                <p className="Body2 !font-semibold text-Light-Text-Primary dark:text-Dark-Text-Primary">
                  Credit card
                </p>
                <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary">
                  2566 xxxx xxxx 8908
                </p>
              </div>
            </div>
            <input
              type="number"
              placeholder="CVV"
              className="w-20 h-10 px-3 rounded-md outline-none bg-transparent border-solid border-Light-Other-Ouline_Border dark:border-Dark-Other-Ouline_Border border"
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-3">
              <img src={Bank2} alt="Bank" className="w-[42px] h-[30px]" />
              <div>
                <p className="Body2 !font-semibold">Credit card</p>
                <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary">
                  2566 xxxx xxxx 8908
                </p>
              </div>
            </div>
            <input
              type="number"
              placeholder="CVV"
              className="w-20 h-10 px-3 rounded-md outline-none bg-transparent border-solid border-Light-Other-Ouline_Border dark:border-Dark-Other-Ouline_Border border"
            />
          </div>
          <p className="Caption text-Light-Main-Primary dark:text-Dark-Main-Primary">
            Add Payment Method
          </p>
        </div>
        <div>
          {" "}
          <input
            type="text"
            placeholder="Email Address"
            className="h-10 w-full px-3 rounded-md outline-none bg-transparent border-solid border-Light-Other-Ouline_Border dark:border-Dark-Other-Ouline_Border border"
          />
        </div>
        <div>
          <button className="w-full py-[7px] px-[22px] bg-Light-Main-Primary text-white rounded-md">
            Contect Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradePlan;
