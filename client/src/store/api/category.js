import axios from 'axios';
import { store } from '../store';

export async function getCategories() {
  try {
    const response = await axios.get('/category');
    const data = await response.data.categories;
    store.dispatch({
      type: 'CATEGORIES_LOADED',
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
}
