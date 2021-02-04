import React, { useState, useEffect } from 'react'
import request from 'superagent'

const greenMsg = 'You are in the green!'
const redMsg = "Don't worry too much, we got some tools to help you out!"

const serverURL = 'http://localhost:3000/api/v1/budgets'

function Result (props) {
  const [results, setResult] = useState([])

  useEffect(() => {
    request.get(serverURL)
      .then(res => {
        console.log(res.body)
        setResult(res.body)
        return null
      })
      .catch(err => err)
  }, [])

  return (
    <div>
      <h2>Results:</h2>
      <div style={{ margin: '3rem' }}>
        <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {
            results.map(x => {
              return (
                <div key={x.id}>
                  <h3>Name</h3>
                  <p>{x.name}</p>
                  <h3>Income</h3>
                  <p>${x.income}</p>
                  <h3>Expenses</h3>
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
