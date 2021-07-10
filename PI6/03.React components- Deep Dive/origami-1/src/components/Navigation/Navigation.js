import React, { Component } from 'react'
import classes from './Navigation.module.css';
import Link from '../Link/Link';
import whiteOrigami from '../../assets/white-origami-bird.png'

export class Navigation extends Component {
  render() {


    const links=[1,2,3,4,5,6,7,8,9,10,11]

    return (
      <nav className={classes.Navigation}>
        <ul>
          <img src={whiteOrigami} alt="white Origami image" />
          {links.map(link=> <Link key={link.toString()} id={link}/>)}
        </ul>
      </nav>
    )
  }
}

export default Navigation
