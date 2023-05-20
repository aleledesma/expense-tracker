import { useGlobalState } from '../../context/GlobalState'

const Balance = () => {
  const { transactions } = useGlobalState()
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0)
  return (
    <div className='text-base font-bold flex justify-between items-center'>Total Balance: <span>${total}</span></div>
  )
}

export default Balance
