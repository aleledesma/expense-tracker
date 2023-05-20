import { useGlobalState } from '../../context/GlobalState'

const style = 'flex justify-between items-center'

const ProfitExpense = () => {
  const { transactions } = useGlobalState()
  const amounts = transactions.map(transaction => transaction.amount)
  const profit = amounts.filter(amount => amount > 0).reduce((acc, item) => (acc += item), 0)
  const expenses = amounts.filter(amount => amount < 0).reduce((acc, item) => (acc += item), 0) * -1
  return (
    <div className='text-sm'>
        <div className={style}>Profit: <span>${profit}</span></div>
        <div className={style}>Expenses: <span>${expenses}</span></div>
    </div>
  )
}

export default ProfitExpense
