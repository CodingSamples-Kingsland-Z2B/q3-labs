import React, { useState, useEffect} from 'react';
import classes from './Profile.module.css';
import Posts from '../../components/Posts/Posts'


const Profile = (props)=> {

  const [, setPosts] = useState([])

  useEffect(()=>{
    setPosts(props.posts.filter(post=> post.author._id === props.user._id))
  }, [])


  const logout= ()=>{
    props.auth(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    props.history.push('/login')
  }


    return (
      <div className={classes.Profile}>
        <img src="https://via.placeholder.com/150" alt="profile" />
        <div className={classes['personal-info']}>
          <p>
            <span>Username :</span>
            {props.user.username}
          </p>
          <p>
            <span>Posts:</span>
            {props.posts.length}
          </p>
            <br />
            <button onClick={logout}> Logout</button>

            <div>
              {
              props.user.posts.length===0? 
              (<h1>No recent Posts</h1>):
              ( <><h2>3 of your recent posts</h2>  <Posts last={3} posts={props.posts}/></>)
              }
            </div>
     


        </div>
      </div>
    )
  
}

export default Profile
