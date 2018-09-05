import { ADD_TO_CART } from '../actions/actionCart';

export default (state = [], action) => {
  const inCart = state.slice(0);
  switch (action.type) {
    case ADD_TO_CART:
      const item = Object.assign({}, state, action.payload);
      inCart.push(item);
      return inCart;
    default:
      return inCart;
  }
};