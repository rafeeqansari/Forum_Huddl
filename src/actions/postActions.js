/*
 * action types
 */

export const UPDATE_USERS = 'UPDATE_USERS'
export const LOAD_USERS = 'LOAD_USERS'
export const LOAD_POSTS = 'LOAD_POSTS'
export const LOAD_SEARCH_POSTS = 'LOAD_SEARCH_POSTS'
export const UPDATE_POSTS = 'UPDATE_POSTS'
export const UPDATE_SEARCH_POSTS = 'UPDATE_SEARCH_POSTS'
export const UPDATE_USER_COMPLETE = 'UPDATE_USER_COMPLETE'


/*
 * action creators
 */

// Action tells to start update user
export function updateUser(payload) {
  return { type: UPDATE_USERS, payload: payload }
}

// Action that populates users
export function loadUsers(users) {
  return { type: LOAD_USERS, payload: users }
}

// Action that populate posts
export function loadPosts(posts) {
  return { type: LOAD_POSTS, payload: posts }
}


// Action tells start update posts
export function updatePosts(payload) {
  return { type: UPDATE_POSTS, payload: payload }
}

// Action for search post update
export function updatePostsSearch(keyword) {
  return { type: UPDATE_SEARCH_POSTS, payload: keyword }
}
