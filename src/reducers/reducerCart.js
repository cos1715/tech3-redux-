import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_WHOLE_ITEMS_FROM_CART
} from "../actions/actionCart";

export default (state = [], action) => {
  let inCart = state.slice(0);
  let index;
  switch (action.type) {
    case ADD_TO_CART:
      inCart.push(action.payload);
      return inCart;
    case REMOVE_FROM_CART:
      index = inCart.findIndex(item => {
        return (
          item.name === action.payload.name &&
          item.available === action.payload.available + 1
        );
      });
      inCart.splice(index, 1);
      return inCart;
    case REMOVE_WHOLE_ITEMS_FROM_CART:
      inCart = inCart.filter(item => {
        return item.name !== action.payload.name;
      });
      return inCart;
    default:
      return inCart;
  }
};
