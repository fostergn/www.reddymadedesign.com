import initialState from '../initialState';

import {
    TOGGLE_FILTER_MENU,
    CHANGE_WORK_FILTER,
    CHANGE_WORK_VIEW
} from '../actions/actions';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FILTER_MENU:
            return Object.assign({}, state, {
                workFilterOpen: !state.workFilterOpen
            });
        case CHANGE_WORK_FILTER:
            return Object.assign({}, state, {
                workFilter: action.filter
            });
            case CHANGE_WORK_VIEW:
            return Object.assign({}, state, {
                workView: action.view
            });
        default:
            return state;
    }
};

// Export Reducer
export default rootReducer;
