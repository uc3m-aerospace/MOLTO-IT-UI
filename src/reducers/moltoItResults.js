import {RESULTS_DATA, RESET_DATA} from '../constants'

const initialState = {
    results: {}
};

export const moltoItResults = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case RESULTS_DATA:
            return Object.assign({}, state, payload);
        case RESET_DATA:
            return initialState;
        default:
            return state;
    }
};