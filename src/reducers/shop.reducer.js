import { GET_CART_ITEMS } from '../actions/cart.actions';
import { GET_PRODUCT_LIST } from '../actions/products.action';
import CartReudcer from './reducer-cart';
import ProductsReducer from './reducer-products';

const initState = {
  inCart: CartReudcer,
  products: ProductsReducer
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return state.inCart;
    case GET_PRODUCT_LIST:
      return state.products;
    default:
      return state;
  }
}