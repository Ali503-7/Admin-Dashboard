import Dots from "../../../components/Geniral/Dots";
import { MdDevices } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";

const Transactions_2 = () => {
  return (
    <div className="sm:col-span-8 flex flex-col justify-between Box">
      <div className="text-Light-Text-Primary dark:text-Dark-Text-Primary H6 !font-semibold">
        Transactions
        <p className="text-Light-Text-Primary font-light Body2 dark:text-Dark-Text-Primary">
          <span className="text-Light-Text-Primary font-semibold dark:text-Dark-Text-Primary">
            Total 48.5% Growth 😎
          </span>{" "}
          this month
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex items-center ">
          <AiOutlineRise className="p-[9px] w-full h-full text-white rounded-md bg-Light-Main-Primary mr-3" />
          <div>
            <p className="Caption">Sales</p>
            <p className="H6">245k</p>
          </div>
        </div>

        <div className="flex items-center">
          <LuUser className="bg-Light-Main-Success mr-3 p-[9px] w-full h-full text-white rounded-md" />
          <div>
            <p className="Caption">Customers</p>
            <p className="H6">12.5k</p>
          </div>
        </div>

        <div className="flex items-center">
          <MdDevices className="bg-Light-Main-Warning mr-3 p-[9px] w-full h-full text-white rounded-md" />
          <div>
            <p className="Caption">Products</p>
            <p className="H6">1.54k</p>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <BsCurrencyDollar className="bg-Light-Main-Info dark:bg-Dark-Main-Info mr-3 p-[9px] w-12 h-12 text-white rounded-md" />
          <div>
            <p className="Caption">Total Profit</p>
            <h3 className="H6">$482k</h3>
          </div>
        </div>
      </div>

      <Dots />
    </div>
  );
};

export default Transactions_2;
