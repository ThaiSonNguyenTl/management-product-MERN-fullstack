import * as Types from '../constants/ActionTypes';

const initialState = {}

const search = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH:
            // console.log(action);
            return { keyword: action.keyword, product: action.product}
        default:
            return state
    }
}

export default search