import React, { Component } from 'react'
import classes from './Link.module.css';

export class Link extends Component {
  render() {
    return (
      <li className={classes.listItem}>
        <a href="#">Going to {this.props.id}</a>
      </li>
    )
  }
}

export default Link
