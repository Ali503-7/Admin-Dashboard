import Dots from "../../../components/Geniral/Dots";
import { MdDevices } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import { LuUser } from "react-icons/lu";

const Transactions = () => {
  return (
    <div className="lg:col-span-6 sm:col-span-6 flex flex-col justify-between Box">
      <div className="text-Light-Text-Primary dark:text-Dark-Text-Primary H6 !font-semibold">
        Transactions
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-3">
        <div className="flex items-center ">
          <AiOutlineRise className="p-[9px] xl:w-full xl:h-full xl:text-[0px] text-[45px] text-white rounded-md bg-Light-Main-Primary mr-3" />
          <div>
            <p className="Caption">Sales</p>
            <p className="H6">245k</p>
          </div>
        </div>

        <div className="flex items-center">
          <LuUser className="bg-Light-Main-Success mr-3 p-[9px] xl:w-full xl:h-full xl:text-[0px] text-[45px] text-white rounded-md" />
          <div>
            <p className="Caption">Customers</p>
            <p className="H6">12.5k</p>
          </div>
        </div>

        <div className="flex items-center">
          <MdDevices className="bg-Light-Main-Warning mr-3 p-[9px] xl:w-full xl:h-full xl:text-[0px] text-[45px] text-white rounded-md" />
          <div>
            <p className="Caption">Products</p>
            <p className="H6">1.54k</p>
          </div>
        </div>
      </div>
      <Dots />
    </div>
  );
};

export default Transactions;
