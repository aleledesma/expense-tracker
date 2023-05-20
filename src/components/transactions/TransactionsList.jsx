import { useGlobalState } from '../../context/GlobalState'

const TransactionsList = () => {
  const { transactions, deleteTransaction } = useGlobalState()

  function handleClick (id) {
    deleteTransaction(id)
  }

  return (
    <div>
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id} className='flex justify-between items-center bg-slate-800 mb-2 rounded-sm px-2 py-1'>
              {transaction.description}
              <div>
                {transaction.amount}
                <button onClick={() => { handleClick(transaction.id) }} className=' ml-2 text-red-400 text-xl'>x</button>
              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TransactionsList
