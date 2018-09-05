export const DECREASE_AVAILABILITY = 'DECREASE_AVAILABILITY';
export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';

export const decreaseAvailability = (item) => {
    return {
        type: DECREASE_AVAILABILITY,
        payload: item,
    }
};

export const addNewItem = (item) => {
    return {
        type: ADD_NEW_ITEM,
        payload: item,
    }
};