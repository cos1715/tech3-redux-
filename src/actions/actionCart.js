export const ADD_TO_CART = "ADD_NEW_PRODUCT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_WHOLE_ITEMS_FROM_CART = "REMOVE_WHOLE_ITEMS_FROM_CART";

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const removeFromCart = item => {
  return {
    type: REMOVE_FROM_CART,
    payload: item
  };
};

export const removeWholeItemsFromCart = item => {
  return {
    type: REMOVE_WHOLE_ITEMS_FROM_CART,
    payload: item
  };
};
