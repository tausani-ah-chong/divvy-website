const connection = require('./connection')

module.exports = {
  getAllBudgets,
  getBudgetById,
  saveBudget
  // updateBudget,
  // delBudget
}

function getAllBudgets (db = connection) {
  return db('budgets')
    .select()
}

function getBudgetById (id, db = connection) {
  return db('budgets')
    .where('id', id)
    .select()
}

function saveBudget (result, db = connection) {
  return db('budgets')
    .insert({
      name: result.name,
      income: result.income,
      expenses: result.expenses
    })
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
