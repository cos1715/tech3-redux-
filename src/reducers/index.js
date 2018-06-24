import { combineReducers } from 'redux';
import CartReudcer from './reducer-cart';
import ProductsReducer from './reducer-products';

const allReducers = combineReducers({
  cart: CartReudcer,
  products: ProductsReducer
});

export default allReducers;