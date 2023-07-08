import Cup from "../../../assets/Imgs/misc/trophy.png";
const Congratulations = () => {
  return (
    <div className="Box col-span-4 flex flex-col gap-4">
      <div>
        <h6 className="H6">Congratulations John! 🎉</h6>
        <span className="Body2">Best seller of the month</span>
      </div>
      <div>
        <div>
          <div>
            <h5 className="H5 text-Light-Main-Primary dark:text-Dark-Main-Primary">
              $42.8k
            </h5>
            <span className="Body2 text-Light-Text-Secondary dark:text-Dark-Text-Primary">
              78% of target 🚀
            </span>
          </div>
        </div>
      </div>
      <button className="Button-S text-white py-1 px-[14px] bg-Light-Main-Primary dark:bg-Dark-Main-Primary uppercase rounded-md w-fit">
        View Sales
      </button>
      <img src={Cup} alt="Cup" className="absolute w-[79px] h-[102px] right-6 bottom-8" />
    </div>
  );
};

export default Congratulations;
