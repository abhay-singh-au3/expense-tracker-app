import { getCategories } from '../api/category';

function categoryReducer(state = [], action) {
  if (action.type === 'GET_CATEGORY') {
    getCategories();
  } else if (action.type === 'CATEGORIES_LOADED') {
    state = [...action.payload];
  }
  return state;
}

export default categoryReducer;
