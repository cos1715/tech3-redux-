export const INCREASE_AVAILABILITY = "INCREASE_AVAILABILITY";
export const DECREASE_AVAILABILITY = "DECREASE_AVAILABILITY";
export const ADD_NEW_ITEM = "ADD_NEW_ITEM";

export const increaseAvailability = item => {
  return {
    type: INCREASE_AVAILABILITY,
    payload: item
  };
};

export const decreaseAvailability = item => {
  return {
    type: DECREASE_AVAILABILITY,
    payload: item
  };
};

export const addNewItem = item => {
  return {
    type: ADD_NEW_ITEM,
    payload: item
  };
};
