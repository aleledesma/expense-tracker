import { createContext, useContext, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer'
const initialState = {
  transactions: [],
  profitExpenses: { profit: 0, expenses: 0 }
}
const Context = createContext()

export const useGlobalState = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useGlobalState must be used within a ContextProvider')
  }
  return context
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem('transactions')
    return localData ? JSON.parse(localData) : initialState
  })

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state))
  }, [state])

  function addTransaction (transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  function deleteTransaction (id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  return (
      <Context.Provider value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
      }}>
          {children}
      </Context.Provider>
  )
}

export default ContextProvider
