import React, { Component } from 'react';
import classes from './Profile.module.css';
import Posts from '../../components/Posts/Posts'
export class Profile extends Component {
  render() {
    return (
      <div className={classes.Profile}>
        <img src="https://via.placeholder.com/150" alt="profile" />
        <div className={classes['personal-info']}>
          <p>
            <span>Email :</span>
            someone@someday.gg
          </p>
          <p>
            <span>Posts:</span>
            9
          </p>
          <div>
            <h2>3 of your recent posts</h2>
            <Posts last={3} posts={this.props.posts}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
