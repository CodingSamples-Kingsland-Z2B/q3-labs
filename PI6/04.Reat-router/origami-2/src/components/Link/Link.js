import React, { Component } from 'react'
import classes from './Link.module.css';
import {Link as A} from 'react-router-dom'

export class Link extends Component {
  render() {

    let url = this.props.id;
    
    if(this.props.id ==='home'){
      console.log(url);
      url='';
    }

    return (
      <li className={classes.listItem}>
        <A to={`/${url}`} className={classes.capitalize}>{this.props.id}</A>
      </li>
    )
  }
}

export default Link
