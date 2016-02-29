import { combineReducers } from 'redux'
import { ADD_POST, GET_POSTS, REMOVE_POST } from '../actions'

let postsInitialState = { items: [], isFetching: false }
function posts(state = postsInitialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts
      })
    case ADD_POST:
      return Object.assign({}, state, {
        isFetching: false,
        items: state.items.concat(action.post)
      })
    case REMOVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        items: state.items.filter(item => item.id != action.id)
      })
    default:
      return state
  }
}

export default combineReducers({
  posts
})
