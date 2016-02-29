let responseHandler = promise => {
  return promise
    .then(response => response.json())
    .then(res => {
      if (res.status == 'ERROR') throw new Error()
      return res.data
    })
}

export default {

  getPosts: () => responseHandler(fetch('/api/posts')),
  addPost: (data) => responseHandler(fetch('/api/posts', { method: 'POST', body: data })),
  removePost: (postId) => responseHandler(fetch(`/api/posts/${postId}`, { method: 'DELETE' }))

}
