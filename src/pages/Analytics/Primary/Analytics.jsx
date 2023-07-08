import Congratulations from "../Secendary/Congratulations"
import TotalErning from "../Secendary/TotalErning"
import Transactions_2 from "../Secendary/Transaction_2"
import WeeklyOverview from "../Secendary/WeeklyOverview"

const Analytics = () => {
  return (
    <div className='Page'>

      {/* box-1 */}

      <Congratulations />

      {/* box-2 */}

      <Transactions_2 />

      {/* box-3 */}

      <WeeklyOverview />

      {/* box-4 */}

      <TotalErning />
    </div>
  )
}

export default Analytics