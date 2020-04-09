import axios from 'axios';
import { store } from '../store';

export async function getExpenses() {
  try {
    const response = await axios.get('/expenses');
    const data = await response.data.data;
    const expense = await data.reduce((acc, obj) => obj.amount + acc, 0);
    store.dispatch({
      type: 'EXPENSE_LOADED',
      payload: expense,
    });
  } catch (err) {
    console.log(err);
  }
}
