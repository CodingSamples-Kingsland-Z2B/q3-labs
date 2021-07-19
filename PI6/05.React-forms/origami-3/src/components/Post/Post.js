import React, { Component } from 'react';
import classes from './Post.module.css';
import logo from '../../assets/blue-origami-bird.png'

export class Post extends Component {
  render() {
    return (
      <div className={classes.Post}>
        <img src={logo} alt="Origami" />
        <p className={classes.description}> {this.props.description}</p>
        <div>
          <span> <small>Author : </small> {this.props.author}</span>
        </div>
      </div>
    )
  }
}

export default Post
