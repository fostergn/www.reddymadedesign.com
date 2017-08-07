import fetch from 'isomorphic-fetch'

export const TOGGLE_FILTER_MENU = 'TOGGLE_FILTER_MENU'
export const CHANGE_WORK_FILTER = 'CHANGE_WORK_FILTER'
export const CHANGE_WORK_VIEW = 'CHANGE_WORK_VIEW'
export const UPDATE_QUADRANT = 'UPDATE_QUADRANT'
export const UPDATE_QUADRANT_MODE = 'UPDATE_QUADRANT_MODE'

export function toggleFilterMenu(){
    return {
        type: TOGGLE_FILTER_MENU
    }
}

export function changeWorkFilter(filter){
    return {
        type: CHANGE_WORK_FILTER,
        filter
    }
}

export function changeWorkView(view){
    return {
        type: CHANGE_WORK_VIEW,
        view
    }
}

export function updateQuadrant(quadrant){
    return {
        type: UPDATE_QUADRANT,
        quadrant
    }
}

export function updateQuadrantMode(mode){
    return {
        type: UPDATE_QUADRANT_MODE,
        mode
    }
}