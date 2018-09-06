export const DECREASE_AVAILABILITY = "DECREASE_AVAILABILITY";
export const ADD_NEW_ITEM = "ADD_NEW_ITEM";
export const FETCH_ERRORED = "FETCH_ERRORED";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const decreaseAvailability = item => {
  return {
    type: DECREASE_AVAILABILITY,
    payload: item
  };
};

export const itemsHasErrored = bool => {
  return {
    type: FETCH_ERRORED,
    payload: bool
  };
};

export const itemsFetchDataSuccess = items => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: items
  };
};

export const addNewItem = item => {
  return {
    type: ADD_NEW_ITEM,
    payload: item
  };
};
