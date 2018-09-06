export const ADD_TO_CART = 'ADD_NEW_PRODUCT';

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item,
    };
};