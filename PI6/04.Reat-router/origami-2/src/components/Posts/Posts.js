import React, { Component } from 'react'
import Post from '../Post/Post';
import classes from './Posts.module.css';

export class Posts extends Component {
  render() {

    const posts = this.props.posts.map(post=> <Post key={post._id} description={post.description} author={post.author}/>)

    if(this.props.last && this.props.last <= this.props.posts.length ){

      posts.splice(this.props.last)
    }

    return (
      <div className={classes.Posts}>
          {posts}
      </div>
    )
  }
}


export default Posts
