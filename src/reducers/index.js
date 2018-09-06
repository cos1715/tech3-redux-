import { combineReducers } from 'redux';
import reducerCart from './reducerCart';
import reducerProducts from './reducerProducts';
import data from './reducerData';

const allReducers = combineReducers({
    inCart: reducerCart,
    allProducts: data,
    productListParams: reducerProducts,
});

export default allReducers;

// TODO: implement combine reducer functionality