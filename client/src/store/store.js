import { createStore, combineReducers } from 'redux';

import categoryReducer from './reducer/categoryReducer';
import incomeReducer from './reducer/incomeReducer';
import expenseReducer from './reducer/expenseReducer';

let reducer = combineReducers({
  categories: categoryReducer,
  income: incomeReducer,
  expense: expenseReducer,
});

let store = createStore(reducer);

function stateMapper(state) {
  return state;
}

export { store, stateMapper };
