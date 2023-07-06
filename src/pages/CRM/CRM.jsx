import Ratings from "./Ratings";
import Revenue from "./RevenueR";
import Section from "./Section";
import Transactions from "./Transactions";
import TotalSales from "./totalSales";
import Sales from "./Sales";
import Activity from "./Activity";
import WeeklySales from "./WeeklySales";
import DobbleBox from "./DobbleBox";
import UpgradePlan from "./UpgradePlan";
import Meeting from "./Meeting";

const CRM = () => {
  return (
    <div className="grid sm:grid-cols-[repeat(2,_minmax(0,_1fr))] lg:grid-cols-[repeat(12,_minmax(0,_1fr))]  grid-cols-[repeat(0,_minmax(0,_1fr))] grid-flow-row-dense gap-6 grid-rows text-Light-Text-Primary dark:text-Dark-Text-Primary">
      {/* box-1 */}

      <Ratings />

      {/* box-2 */}

      <Section />

      {/* box-3 */}

      <Transactions />

      {/* box-4 */}

      <TotalSales />

      {/* box-5 */}

      <Revenue />

      {/* box-6 */}

      <Sales />

      {/* box-7 */}

      <Activity />

      {/* box-8 */}

      <WeeklySales />

      {/* box-9 box-10 */}

      <DobbleBox />

      {/* box-11 */}

      <UpgradePlan />

      {/* box-12 */}

      <Meeting />

      {/* box-13 */}

      
    </div>
  );
};

export default CRM;
