import React, { useEffect, useRef} from 'react'
import classes from './Post.module.css';
import Posts from '../../components/Posts/Posts'
import {addPost} from '../../services'

const Post = (props)=>{
  const textRef = useRef();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      props.history.push('/login')
    }
  }, [props.history])

  const submitHandler = (e)=>{
    e.preventDefault();
    addPost(textRef.current.value).then(data=>{
      props.fetchPosts();
      props.history.push('/')
    })
  }

    return (
      <div className={classes.Input}>
        <div>
          <h1>Share your thoughts ...</h1>
          <form onSubmit={submitHandler}>
          <textarea ref={textRef}></textarea>
          <button>Post</button>
          </form>
        </div>
        <div>
            <h2>Last 3 Post on your wall</h2>
            <Posts last={3} posts={props.posts}/>
        </div>
      </div>
    )
  }


export default Post
