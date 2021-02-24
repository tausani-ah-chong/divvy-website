import React, { useEffect } from 'react'
import { getBudgets } from '../api'
import { connect } from 'react-redux'
import { setBudgets } from '../actions/budgets'

// const greenMsg = 'You are in the green!'
// const redMsg = "Don't worry too much, we got some tools to help you out!"

function Result ({ budgets, dispatch }) {
  useEffect(() => {
    getBudgets()
      .then((results) => {
        dispatch(setBudgets(results))
        return null
      })
      .catch(err => console.error(err.message))
  }, [])

  return (
    <div>
      <div style={{ margin: '3rem' }}>
        <h1>Results</h1>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {
            budgets.map(x => {
              return (
                <div key={x.id}>
                  <h4>Name</h4>
                  <p>{x.name}</p>
                  <h4>Income</h4>
                  <p>${x.income}</p>
                  <h4>Expenses</h4>
                  <p>${x.expenses}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    budgets: state.budgets
  }
}

export default connect(mapStateToProps)(Result)
