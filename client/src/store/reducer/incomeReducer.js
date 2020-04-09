import { getIncomes } from '../api/income';

function incomeReducer(state = 0.0, action) {
  if (action.type === 'GET_INCOME') {
    getIncomes();
  } else if (action.type === 'INCOME_LOADED') {
    state = action.payload;
  }
  return state;
}

export default incomeReducer;
