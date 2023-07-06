import { MdPictureAsPdf } from "react-icons/md";
import user from '../../assets/Imgs/avater/Avatar.png'

const Activity = () => {
  return (
    <div className="sm:col-span-6 Box flex flex-col justify-between">
      <h1 className="text-Light-Text-Primary dark:text-Dark-Text-Primary H6 !font-semibold mb-5">
        Activity Timeline
      </h1>
      <div>
        {/* 1 */}

        <div>
          <div className="flex flex-row items-center mb-[9.5px]">
            <div className="w-3 h-3 bg-Light-Main-Error rounded-full  border-red-300 border-[2px] mr-3"></div>
            <p className="Body1 !font-semibold">8 Invoices have been paid</p>
            <span className="Caption text-Light-Text-Disabled dark:text-Dark-Text-Primary ml-auto ">
              Wednesday
            </span>
          </div>
          <div className="flex items-center relative ml-[5px] mb-4">
            <div className="h-full w-px bg-Light-Other-Divider dark:bg-Dark-Other-Divider absolute "></div>
            <div className="ml-[18px]">
              <p className="Body2 text-Light-Text-Secondary dark:text-Dark-Text-Primary">
                Invoices have been paid to the company.
              </p>
              <div className="flex flex-row">
                <MdPictureAsPdf className="h-[21.7px] w-[21.7px] text-[#FF4C51] mr-[10px]" />
                <p className="Body2 !font-semibold">invoice.pdf</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}

        <div>
          <div className="flex flex-row items-center mb-[9.5px]">
            <div className="w-3 h-3 bg-Light-Main-Primary rounded-full border-purple-300 border-[2px] mr-3"></div>{" "}
            <p className="Body1 !font-semibold">
              Create a new project for client 😎
            </p>
            <span className="ml-auto Caption text-Light-Text-Disabled dark:text-Dark-Text-Primary">
              April, 18
            </span>
          </div>
          <div className="flex items-center relative ml-[5px] mb-4">
            <div className="h-full w-px bg-Light-Other-Divider dark:bg-Dark-Other-Divider absolute "></div>
            <div className="ml-[18px]">
              <p className="Body2 text-Light-Text-Secondary dark:text-Dark-Text-Primary">
                Invoices have been paid to the company.
              </p>
              <div className="flex flex-row items-center">
                <img
                  src={user}
                  alt="User"
                  className="rounded-full w-6 h-6 mr-[10px]"
                />
                <p className="Body2 !font-semibold">John Doe (Client)</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}

        <div>
          <div className="flex flex-row items-center mb-[9.5px]">
            <div className="w-3 h-3 bg-Light-Main-Info rounded-full border-blue -200 border-[2px] mr-3"></div>{" "}
            <p className="Body1 !font-semibold">Order #37745 from September</p>
            <span className="Caption text-Light-Text-Disabled dark:text-Dark-Text-Primary ml-auto ">
              January, 10
            </span>{" "}
          </div>
          <div className="flex items-center relative ml-[5px] mb-4">
            <div className="h-full w-px bg-Light-Other-Divider dark:bg-Dark-Other-Divider absolute "></div>
            <div className="ml-[18px]">
              <p className="Body2 text-Light-Text-Secondary dark:text-Dark-Text-Primary">
                Invoices have been paid to the company.
              </p>
            </div>
          </div>
        </div>

        {/* 4 */}

        <div>
          <div className="flex flex-row items-center mb-[9.5px]">
            <div className="w-3 h-3 bg-Light-Main-Warning rounded-full border-yell ow-200 border-[2px] mr-3"></div>{" "}
            <p className="Body1 !font-semibold">Public Meeting</p>
            <span className="Caption text-Light-Text-Disabled dark:text-Dark-Text-Primary ml-auto ">
              September, 30
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
