import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1/budgets'

export function getBudgets () {
  return request.get(serverURL)
    .then(result => {
      console.log(result.body)
      return result.body
    })
    .catch(err => console.error(err.message))
}

export function addBudgets (data) {
  const { name, income, expenses } = data
  const newObj = {
    name,
    income: Number(income),
    expenses: Number(expenses)
  }
  return request.post(serverURL)
    .send(newObj)
    .then(() => {
      return null
    })
}
