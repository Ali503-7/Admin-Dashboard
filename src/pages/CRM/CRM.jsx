import Ratings from "./Ratings";
import Revenue from "./RevenueR";
import Section from "./Section";
import Transactions from "./Transactions";
import TotalSales from "./totalSales";

const CRM = () => {
  return (
    <div className="grid grid-cols-[repeat(16,_minmax(0,_1fr))] grid-flow-row-dense gap-6 grid-rows text-Light-Text-Primary dark:text-Dark-Text-Primary">
      {/* box-1 */}

      <Ratings />

      {/* box-2 */}

      <Section />

      {/* box-3 */}

      <Transactions />

      {/* box-4 */}

      <TotalSales />

      {/* box-5 */}
      <Revenue /> 5 
    </div>
  );
};

export default CRM;
