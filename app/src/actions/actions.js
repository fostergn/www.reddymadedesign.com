import fetch from 'isomorphic-fetch'

export const TOGGLE_FILTER_MENU = 'TOGGLE_FILTER_MENU'
export const TOGGLE_MENU = 'TOGGLE_MENU'
export const TOGGLE_FULLSCREEN = 'TOGGLE_FULLSCREEN'
export const CHANGE_GRID_FILTER = 'CHANGE_GRID_FILTER'
export const CHANGE_LIST_FILTER = 'CHANGE_LIST_FILTER'
export const CHANGE_WORK_VIEW = 'CHANGE_WORK_VIEW'
export const UPDATE_QUADRANT = 'UPDATE_QUADRANT'
export const UPDATE_QUADRANT_MODE = 'UPDATE_QUADRANT_MODE'
export const ADD_INSTAGRAM_IMAGES = 'ADD_INSTAGRAM_IMAGES'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

const baseUrl = process.env.NODE_ENV !== 'production' ? `http://localhost/api` : '/api';

export function toggleFullscreen(){
    return {
        type: TOGGLE_FULLSCREEN
    }
}

export function toggleMenu(){
    return {
        type: TOGGLE_MENU
    }
}

export function addInstagramImages(images){
    return {
        type: ADD_INSTAGRAM_IMAGES,
        images
    }
}

export function toggleFilterMenu(){
    return {
        type: TOGGLE_FILTER_MENU
    }
}

export function changeGridFilter(filter){
    return {
        type: CHANGE_GRID_FILTER,
        filter
    }
}

export function changeListFilter(filter){
    return {
        type: CHANGE_LIST_FILTER,
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

function requestPosts(category) {
  return {
    type: REQUEST_POSTS,
    category
  }
}

function receivePosts(posts, category) {
    const categoryMap = {
        'feature?per_page=100': 'features',
        'project?per_page=100': 'projects',
        'pages?slug=about': 'about'
    }
  return {
    type: RECEIVE_POSTS,
    posts,
    category: categoryMap[category]
  }
}

export function fetchPosts(category) {
  return function (dispatch) {
    dispatch(requestPosts(category))
    return fetch(`${baseUrl}/wp-json/wp/v2/${category}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receivePosts(json, category))
      )
  }
}