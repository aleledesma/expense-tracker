import PieChart from './components/PieChart'
import Balance from './components/balance/Balance'
import ProfitExpense from './components/balance/ProfitExpense'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionsList from './components/transactions/TransactionsList'
import ContextProvider from './context/GlobalState'
const App = () => {
  return (
    <ContextProvider>
      <div className='h-full flex justify-center text-slate-50'>
        <div className='bg-slate-700 w-1/2 rounded-sm flex'>
          <div className='p-7 w-[65%]'>
            <div className='text-2xl font-bold mb-5'>Expense tracker</div>
            <div className='flex flex-col gap-2 mb-4'>
              <ProfitExpense />
              <Balance />
            </div>
          <TransactionForm />
          </div>
          <div className='w-full p-7 flex flex-col'>
            <PieChart />
            <TransactionsList />
          </div>
        </div>
      </div>
    </ContextProvider>
  )
}

export default App
