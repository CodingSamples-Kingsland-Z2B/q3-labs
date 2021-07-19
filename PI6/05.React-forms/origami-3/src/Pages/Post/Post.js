import React, { Component } from 'react'
import classes from './Post.module.css';
import Posts from '../../components/Posts/Posts'
import {addPost} from '../../services'

export class Post extends Component {

  textRef = React.createRef()

  componentDidMount(){
    if(!localStorage.getItem('token')){
      this.props.history.push('/login')
    }
  }



  submitHandler(e){
    e.preventDefault();
    addPost(this.textRef.current.value).then(data=>{
      this.props.fetchPosts();
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div className={classes.Input}>
        
        <div>
          <h1>Share your thoughts ...</h1>
          <form onSubmit={(e)=>this.submitHandler(e)}>
          <textarea ref={this.textRef}></textarea>
          <button>Post</button>
          </form>
  
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
