import Congratulations from "../Secendary/Congratulations"
import Group4 from "../Secendary/Group4/Primary/Group4"
import TotalErning from "../Secendary/TotalErning"
import Transactions_2 from "../Secendary/Transaction_2"
import WeeklyOverview from "../Secendary/WeeklyOverview"
import Performance from "../Performance"

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

      {/* box-5, box-6, box7, box-8 */}
      
      <Group4 />

      {/* box-9 */}

      <Performance />
    </div>
  )
}

export default Analytics