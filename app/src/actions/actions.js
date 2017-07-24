import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const TOGGLE_FILTER_MAP = 'TOGGLE_FILTER_MAP'
export const TOGGLE_FILTER_EVENTS = 'TOGGLE_FILTER_EVENTS'
export const TOGGLE_FILTER_BUILDINGS = 'TOGGLE_FILTER_BUILDINGS'
export const CHANGE_VIEW = 'CHANGE_VIEW'
export const TOGGLE_FILTERS_VIS = 'TOGGLE_FILTERS_VIS'
export const CLEAR_FILTERS = 'CLEAR_FILTERS'
export const MAP_LOADED = 'MAP_LOADED'
export const RECEIVE_ARCHIVES = 'RECEIVE_ARCHIVES'
export const ANIMATE_NAV = 'ANIMATE_NAV'
export const TOGGLE_NAV = 'TOGGLE_NAV'
export const OPEN_NAV = 'OPEN_NAV'
export const CLOSE_NAV = 'CLOSE_NAV'
export const MARK_FIRST_SESSION = 'MARK_FIRST_SESSION'

const baseUrl = process.env.NODE_ENV !== 'production' ? `http://localhost:8000/api` : '/api';

export function toggleFilter(filter, type) {
    const filterMap = {
        map: TOGGLE_FILTER_MAP,
        buildings: TOGGLE_FILTER_BUILDINGS,
        calendar: TOGGLE_FILTER_BUILDINGS,
        events: TOGGLE_FILTER_EVENTS
    }
    return {
        type: filterMap[type],
        filter
    }
}

export function mapLoaded() {
    return {
        type: MAP_LOADED,
    }
}

export function clearFilters() {
    return {
        type: CLEAR_FILTERS
    }
}

export function toggleFiltersVisibility() {
    return {
        type: TOGGLE_FILTERS_VIS
    }
}

export function changeView(view) {
    return {
        type: CHANGE_VIEW,
        view
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
        sponsor: 'sponsors',
        posts: 'blogs',
        partner: 'partners',
        'building?per_page=100': 'buildings',
        archive: 'archives',
        event: 'events',
        'pages?slug=exhibitions': 'exhibitions',
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

export function fetchArchives(amount, page) {
  return function (dispatch) {
    dispatch(requestPosts('archive'))
    return fetch(`${baseUrl}/wp-json/wp/v2/archive?per_page=${amount}&page=${page}`)
      .then(response => response.json())
      .then(json => {
            if(json.length === amount){dispatch(fetchArchives(amount, page + 1))}
            if(json.length > 0){ return dispatch(receiveArchives(json, 'archive')) }
        }
      )
  }
}

function receiveArchives(posts) {
  return {
    type: RECEIVE_ARCHIVES,
    posts
  }
}

export function toggleNav() {
    return {
        type: TOGGLE_NAV
    }
}

export function openNav() {
    return {
        type: OPEN_NAV
    }
}

export function closeNav() {
    return {
        type: CLOSE_NAV
    }
}

export function markFirstSession() {
    return {
        type: MARK_FIRST_SESSION
    }
}

export function animateNav() {
    return dispatch => {
        setTimeout(() => {
            dispatch(openNav())
            setTimeout(() => {
                dispatch(closeNav())
            }, 2000)
        }, 2000)
    }
}