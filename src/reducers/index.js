import { combineReducers } from 'redux';
import reducerCart from './reducerCart';
import reducerProducts from './reducerProducts';

const allReducers = combineReducers({
  inCart: reducerCart,
  allProducts: reducerProducts
});

export default allReducers;

// TODO: implement combine reducer functionality