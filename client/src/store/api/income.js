import axios from 'axios';
import { store } from '../store';

export async function getIncomes() {
  try {
    const response = await axios.get('/incomes');
    const data = await response.data.data;
    const income = await data.reduce((acc, obj) => obj.amount + acc, 0);
    store.dispatch({
      type: 'INCOME_LOADED',
      payload: income,
    });
  } catch (err) {
    console.log(err);
  }
}
