import React, { Component } from 'react'
import classes from './Post.module.css';
import Posts from '../../components/Posts/Posts'

export class Post extends Component {
  render() {
    return (
      <div className={classes.Input}>
        
        <div>
          <h1>Share your thoughts ...</h1>
          <textarea></textarea>
          <button>Post</button>
        </div>

        <div>
            <h2>Last 3 Post on your wall</h2>
            <Posts last={3} posts={this.props.posts}/>
        </div>

        
      </div>
    )
  }
}

export default Post
