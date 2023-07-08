import Ratings from "../Secandary/Ratings";
import Revenue from "../Secandary/RevenueR";
import Section from "../Secandary/Section";
import Transactions from "../Secandary/Transactions";
import TotalSales from "../Secandary/totalSales";
import Sales from "../Secandary/Sales";
import Activity from "../Secandary/Activity";
import WeeklySales from "../Secandary/WeeklySales";
import DobbleBox from "../Secandary/DobbleBox";
import UpgradePlan from "../Secandary/UpgradePlan";
import Meeting from "../Secandary/Meeting";
import DevMeetup from "../Secandary/DevMeetup";

const CRM = () => {
  return (
    <div className="Page">
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

      <DevMeetup />
    </div>
  );
};

export default CRM;
