import React, { useState, useEffect } from 'react'
import getApi from '../api'

// const greenMsg = 'You are in the green!'
// const redMsg = "Don't worry too much, we got some tools to help you out!"

function Result (props) {
  const [results, setResult] = useState([])

  useEffect(() => {
    getApi()
      .then((res) => {
        setResult(res)
        return null
      })
      .catch(err => console.error(err.message))
  }, [])

  return (
    <div>
      <h1>Results</h1>
      <div style={{ margin: '3rem' }}>
        <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {
            results.map(x => {
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
        </ul>
      </div>
    </div>
  )
}

export default Result
