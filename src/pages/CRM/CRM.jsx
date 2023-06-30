import Ratings from "./Ratings";
import Section from "./Section";
import Transactions from "./Transactions";

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
    </div>
  );
};

export default CRM;
