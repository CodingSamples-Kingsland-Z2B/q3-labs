import React, { Component } from 'react'
import classes from './Navigation.module.css';
import Link from '../Link/Link';
import whiteOrigami from '../../assets/white-origami-bird.png'

export class Navigation extends Component {
  render() {


    return (
      <nav className={classes.Navigation}>
        <ul>
          <img src={whiteOrigami} alt="white Origami" />
          {this.props.links.map((link,i)=> <Link key={i.toString()} id={link}/>)}
        </ul>
      </nav>
    )
  }
}

export default Navigation
