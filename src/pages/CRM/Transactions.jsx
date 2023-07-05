import Dots from "./Dots";
import { MdDevices } from 'react-icons/md'
import { AiOutlineRise } from 'react-icons/ai'
import { LuUser } from 'react-icons/lu'

const Transactions = () => {
  return (
    <div className="sm:col-span-8 bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card shadow-Light_6 dark:shadow-Dark_6 flex flex-col justify-between rounded-md p-5 relative">
      <div className="text-Light-Text-Primary dark:text-Dark-Text-Primary H6 !font-semibold">
        Transactions
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
      </div>
      <Dots />
    </div>
  );
};

export default Transactions;
