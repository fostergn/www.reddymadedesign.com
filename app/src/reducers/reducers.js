import unionBy from 'lodash/unionBy'
import initialState from '../initialState';

import {
    TOGGLE_FILTER_MAP,
    TOGGLE_FILTER_BUILDINGS,
    CHANGE_VIEW,
    TOGGLE_FILTERS_VIS,
    CLEAR_FILTERS,
    MAP_LOADED,
    TOGGLE_FILTER_EVENTS,
    RECEIVE_POSTS,
    RECEIVE_ARCHIVES,
    TOGGLE_NAV,
    CLOSE_NAV,
    OPEN_NAV,
    MARK_FIRST_SESSION
} from '../actions/actions';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FILTER_BUILDINGS:
            return Object.assign({}, state, {
                buildingsFilters: state.buildingsFilters.includes(action.filter) ? state.buildingsFilters.filter( tag => tag !== action.filter) : [...state.buildingsFilters, action.filter]
            });
        case TOGGLE_FILTER_MAP:
            return Object.assign({}, state, {
                mapFilters: state.mapFilters.includes(action.filter) ? state.mapFilters.filter( tag => tag !== action.filter) : [...state.mapFilters, action.filter]
            });  
                  
        case TOGGLE_FILTER_EVENTS:
            return Object.assign({}, state, {
                eventsFilters: state.eventsFilters.includes(action.filter) ? state.eventsFilters.filter( tag => tag !== action.filter) : [...state.eventsFilters, action.filter]
            });                    
        case CHANGE_VIEW:
            return Object.assign({}, state, {
                buildingsView: action.view
            });
        case CLEAR_FILTERS:
            return Object.assign({}, state, {
                buildingsFilters: [],
                mapFilters: [],
                eventsFilters: [],
            });
        case MAP_LOADED:
            return Object.assign({}, state, {
                isMapLoaded: true,
            });            
        case TOGGLE_FILTERS_VIS:
            return Object.assign({}, state, {
                buildingsFiltersVisible: !state.buildingsFiltersVisible
            });           
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                [action.category]: action.posts
            });           
        case RECEIVE_ARCHIVES:
            return Object.assign({}, state, {
                archives: unionBy(state.archives, action.posts, 'slug')
            });           
        case TOGGLE_NAV:
            return Object.assign({}, state, {
                isNavOpen: !state.isNavOpen
            });           
        case OPEN_NAV:
            return Object.assign({}, state, {
                isNavOpen: true
            });           
        case CLOSE_NAV:
            return Object.assign({}, state, {
                isNavOpen: false
            });           
        case MARK_FIRST_SESSION:
            return Object.assign({}, state, {
                firstSession: false
            });           
        default:
            return state;
    }
};

// Export Reducer
export default rootReducer;
