import React, { useState } from 'react'
import { addBudgets } from '../api'

function Form () {
  const initialState = {
    name: '',
    income: 0,
    expenses: 0
  }

  const [form, setForm] = useState(initialState)

  // finish sending data to api function
  function clickHandler () {
    addBudgets(form)
  }

  function onChange (e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <>
      <div>
        <h1>Enter Details</h1>
      </div>
      <div className='container justify-content-center' style={{ display: 'flex' }}>
        <div style={{ margin: '3rem', width: '30%', textAlign: 'left' }} >
          <form>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>Name</label>
              <input type='text' name='name' id='name' value={form.name} onChange={onChange} className='form-control'/>
            </div>
            <div className='mb-3'>
              <label htmlFor='income' className='form-label'>Income</label>
              <input type='number' name='income' id='income' value={form.income} onChange={onChange} className='form-control'/>
            </div>
            <div className='mb-3'>
              <label htmlFor="expenses" className='form-label'>Expenses</label>
              <input type='number' name='expenses' id='expenses' value={form.expenses} onChange={onChange} className='form-control'/>
            </div>
            <a onClick={clickHandler} href='#/result' className='btn dload-btn'>Submit</a>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
