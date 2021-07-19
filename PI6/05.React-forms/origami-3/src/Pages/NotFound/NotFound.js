import React, { Component } from 'react'
import classes from './NotFound.module.css';

export class NotFound extends Component {
  render() {
    return (
      <div className={classes.FourOFour}>
        <h1>Something went wrong ....</h1>
        <img src="https://via.placeholder.com/150" alt="profile" />
      </div>
    )
  }
}

export default NotFound
