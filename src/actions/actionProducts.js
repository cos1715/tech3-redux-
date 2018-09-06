export const ORDER_ITEMS = 'ORDER_PRODUCTS';

export const orderItems = (orderBy) => {
    return {
        type: ORDER_ITEMS,
        payload: orderBy,
    };
};