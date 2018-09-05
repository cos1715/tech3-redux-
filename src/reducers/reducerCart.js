import {GET_CART_ITEMS} from '../actions/actionCart';
import {GET_PRODUCT_LIST} from '../actions/actionProducts';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return null;
    case REMOVE_FROM_CART:
      return null;
    default:
      return state;
  }
}