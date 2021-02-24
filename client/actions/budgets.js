import budgets from "../reducers/budgets"

export const SET_BUDGETS = 'SET_BUDGETS'

export function setBudgets (budgets) {
  return {
    type: SET_BUDGETS,
    budgets
  }
}
