import { getExpenses } from '../api/expense';

function expenseReducer(state = 0.0, action) {
  if (action.type === 'GET_EXPENSE') {
    getExpenses();
  } else if (action.type === 'EXPENSE_LOADED') {
    state = action.payload;
  }
  return state;
}

export default expenseReducer;
