import { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState'

const inputStyle = 'w-full bg-transparent outline-none border border-slate-200 rounded-sm px-3 py-1'

const transactionForm = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const { addTransaction } = useGlobalState()

  function handleDescriptionChange (e) {
    setDescription(e.target.value)
  }

  function handleAmountChange (e) {
    setAmount(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    if (description.trim().length === 0 || amount === '') return
    const newTransaction = {
      id: window.crypto.randomUUID(),
      description,
      amount: +amount
    }
    addTransaction(newTransaction)
    setDescription('')
    setAmount('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input onChange={handleDescriptionChange} value={description} type="text" placeholder="Enter a description" className={inputStyle} />
        <input id='test' onChange={handleAmountChange} value={amount} type="number" step={0.01} placeholder="0.00" className={inputStyle} />
        <button type='submit' className='bg-slate-800 px-3 py-1 rounded-sm outline-none'>Submit</button>
    </form>
  )
}

export default transactionForm
