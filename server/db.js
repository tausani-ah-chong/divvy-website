const budgets = [
  { id: 1, name: 'James', income: '750', expenses: '500' },
  { id: 2, name: 'Isoa', income: '1000', expenses: '600' },
  { id: 3, name: 'Ben', income: '500', expenses: '300' }
]

module.exports = {
  getAllBudgets,
  getBudget,
  saveBudget
  // updateBudget,
  // delBudget
}

function getAllBudgets () {
  return Promise.resolve(budgets)
}

function getBudget (id) {
  const result = budgets.find(i => i.id === id)
  return Promise.resolve({ ...result })
}

function saveBudget (result) {
  budgets.push(result)
  return Promise.resolve(budgets)
}

// Come back and edit update & delete functions

// function updateBudget (newData) {
//   const { id, name, income, expenses } = newData
//   const result = budgets.find(i => i.id === id)
// }

// function delBudget (id) {
//   const newResult = budgets.filter(i => i.id !== id)
//   return Promise.resolve(newResult)
// }
