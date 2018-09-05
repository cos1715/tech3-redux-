import { ORDER_ITEMS } from '../actions/actionProducts';

const initState = {
    orderBy: 'name',
}

export default (state = initState, action) => {
    switch (action.type) {
        case ORDER_ITEMS:
            const params = Object.assign({}, state, { orderBy: action.payload });
            return params;
        default:
            return state;
    }
}
