import initialState from '../initialState';

import {
    TOGGLE_FILTER_MENU,
    CHANGE_GRID_FILTER,
    CHANGE_LIST_FILTER,
    TOGGLE_FULLSCREEN,
    CHANGE_WORK_VIEW,
    UPDATE_QUADRANT,
    UPDATE_QUADRANT_MODE,
    ADD_INSTAGRAM_IMAGES,
    RECEIVE_POSTS,
    TOGGLE_MENU,
} from '../actions/actions';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_FULLSCREEN:
            return Object.assign({}, state, {
                isFullscreen: !state.isFullscreen
            });

        case TOGGLE_MENU:
            return Object.assign({}, state, {
                menuOpen: !state.menuOpen
            });

        case ADD_INSTAGRAM_IMAGES:
            return Object.assign({}, state, {
                instagram: action.images
            });

        case TOGGLE_FILTER_MENU:
            return Object.assign({}, state, {
                workFilterOpen: !state.workFilterOpen
            });

        case CHANGE_GRID_FILTER:
            return Object.assign({}, state, {
                gridFilter: action.filter
            });

        case CHANGE_LIST_FILTER:
            const filterPosition = state.listFilter.indexOf(action.filter);
            if (filterPosition > -1 && state.listFilter.length == 1) {
                return Object.assign({}, state, {
                    listFilter: []
                });
            }
            else if (filterPosition > -1) {
                // remove existing tag
                return Object.assign({}, state, {
                    listFilter: [
                        ...state.listFilter.slice(0, filterPosition),
                        ...state.listFilter.slice(filterPosition + 1)
                    ]
                });
            }
            return Object.assign({}, state, {
                listFilter: action.filter === 'all' ? [] : [...state.listFilter, action.filter]
            });

        case CHANGE_WORK_VIEW:
            return Object.assign({}, state, {
                workView: action.view
            });

        case UPDATE_QUADRANT:
            return Object.assign({}, state, {
                quadrant: action.quadrant
            });

        case UPDATE_QUADRANT_MODE:
            return Object.assign({}, state, {
                quadrantMode: action.mode
            });

        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                [action.category]: action.posts
            });

        default:
            return state;
    }
};

// Export Reducer
export default rootReducer;
