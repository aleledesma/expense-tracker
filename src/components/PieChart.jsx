import { VictoryLabel, VictoryPie } from 'victory'
import { useGlobalState } from '../context/GlobalState'
const PieChart = () => {
  const { transactions } = useGlobalState()
  const amounts = transactions.map(transaction => transaction.amount)
  const profit = amounts.filter(amount => amount > 0).reduce((acc, item) => (acc += item), 0)
  const expenses = amounts.filter(amount => amount < 0).reduce((acc, item) => (acc += item), 0) * -1
  return (
    <div>
      {transactions.length > 0
        ? (
        <VictoryPie
        data={[
          { x: 'Profit', y: profit },
          { x: 'Expenses', y: expenses }
        ]}
        animate={{ duration: 200 }}
        colorScale={['#B2E982', '#E9635F']}
        labelComponent={<VictoryLabel angle={45} style={{ fill: 'white' }} />}
    />
          )
        : (
        <h3 className='text-center text-lg'>No transactions yet</h3>
          )}
    </div>
  )
}

export default PieChart
