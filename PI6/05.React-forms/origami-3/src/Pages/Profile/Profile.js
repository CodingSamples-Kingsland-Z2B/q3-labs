import React, { Component } from 'react';
import classes from './Profile.module.css';
import Posts from '../../components/Posts/Posts'
export class Profile extends Component {


  state = {posts:[]}


  componentDidMount(){
    console.log(this.props.posts)
    this.setState({posts: this.props.posts.filter(post=> post.author._id === this.props.user._id)})
  }


  logout(){
    this.props.auth(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.props.history.push('/login')
  }

  
  render() {

    let userPosts = (
      <div>
      <h2>3 of your recent posts</h2>
      <Posts last={3} posts={this.props.posts}/>
    </div>
    )

    if(this.props.user.posts.length===0){
      userPosts = (
        <div>
          <h1>No recent Posts</h1>
        </div>
      )
    }

    return (
      <div className={classes.Profile}>
        <img src="https://via.placeholder.com/150" alt="profile" />
        <div className={classes['personal-info']}>
          <p>
            <span>Username :</span>
            {this.props.user.username}
          </p>
          <p>
            <span>Posts:</span>
            {this.props.posts.length}
          </p>
            <br />
            <button onClick={()=>{this.logout()}}> Logout</button>
        {userPosts}
        </div>
      </div>
    )
  }
}

export default Profile
