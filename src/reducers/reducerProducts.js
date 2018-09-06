import { ORDER_ITEMS } from '../actions/actionProducts';

const initState = {
    orderBy: 'name',
};

export default (state = initState, action) => {
    let params;
    switch (action.type) {
    case ORDER_ITEMS:
        params = Object.assign({}, state, { orderBy: action.payload });
        return params;
    default:
        return state;
    }
};
