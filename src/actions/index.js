import 'babel-polyfill'
import co from 'co'

export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'

import PostsService from '../services/posts.service'

/**
 * 获取 posts
 */
export let getPosts = () => dispatch => {
  co(function* () {
    let posts = yield PostsService.getPosts()
    dispatch({ type: GET_POSTS, posts: posts })
  })
}
/**
 * 添加 post
 */
export let addPost = (words) => dispatch => {
  co(function* () {
    let fd = new FormData()
    fd.append('words', words)
    let post = yield PostsService.addPost(fd)
    dispatch({ type: ADD_POST, post })
  })
}

/**
 * 移除 post
 */
export let removePost = (postId) => dispatch => {
  co(function* () {
    yield PostsService.removePost(postId);
    dispatch({ type: REMOVE_POST, id: postId });
  })
}
