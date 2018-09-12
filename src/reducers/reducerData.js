import {
  INCREASE_AVAILABILITY,
  DECREASE_AVAILABILITY,
  ADD_NEW_ITEM,
} from "../actions/actionData";

const initState = [
  {
    name: "IPhone 4s",
    price: 200,
    available: 2
  },
  {
    name: "Nokia 2110",
    price: 600,
    available: 0
  },
  {
    name: "Samsung s3",
    price: 345,
    available: 2
  },
  {
    name: "LG G2",
    price: 90,
    available: 1
  },
  {
    name: "Nokia 9930",
    price: 250,
    available: 3
  },
  {
    name: "IPhone X",
    price: 123,
    available: 4
  },
  {
    name: "Meizu m9",
    price: 656,
    available: 23
  },
  {
    name: "Sonny 9",
    price: 564,
    available: 234
  },
  {
    name: "IPhone 6 plus",
    price: 434,
    available: 7
  },
  {
    name: "Alcatel noname",
    price: 123,
    available: 7
  }
];

export default (state = initState, action) => {
  let items;
  let index;
  switch (action.type) {
    case INCREASE_AVAILABILITY:
      items = state.slice(0);
      index = items.findIndex(element => {
        return element.name === action.payload.name;
      });
      items[index] = Object.assign({}, action.payload, {
        available: action.payload.available + 1
      });
      return items;
    case DECREASE_AVAILABILITY:
      items = state.slice(0);
      index = items.findIndex(element => {
        return element.name === action.payload.name;
      });
      items[index] = Object.assign({}, action.payload, {
        available: action.payload.available - 1
      });
      return items;
    case ADD_NEW_ITEM:
      items = state.slice(0);
      items.push(action.payload);
      return items;
    default:
      return state;
  }
};
