import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts, addPost, removePost } from '../actions'

import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  addPost() {
    this.props.dispatch(addPost(this.refs.input.value))
    this.refs.input.value = ''
  }

  removePost(postId) {
    this.props.dispatch(removePost(postId))
  }

  render() {
    const { posts } = this.props

    return (
      <div>
        <h1>Onionkings</h1>
        <div className="add-post">
          <input ref="input" />
          <button onClick={this.addPost.bind(this)}>Add</button>
        </div>
        <ul className="posts-list">
        {
          posts.map(item =>
            <li key={item.id} className="post-item">
              <span>{item.words}</span>
              <a className="close" onClick={this.removePost.bind(this, item.id)}>&times;</a>
            </li>
          )
        }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { posts: data } = state
  const { items: posts } = data
  return {
    posts
  }
}

export default connect(mapStateToProps)(App)
