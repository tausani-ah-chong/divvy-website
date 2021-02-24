import { SET_BUDGETS } from '../actions/budgets'

function budgets (state = [], action) {
  switch (action.type) {
    case SET_BUDGETS:
      return action.budgets

    default:
      return state
  }
}

export default budgets
