import React, { Component } from 'react'
import classes from './Footer.module.css';
import blueOrigami from '../../assets/blue-origami-bird-flipped.png';
import Link from '../Link/Link';

export class Footer extends Component {
  render() {

    const links = [1,2,3,4,5,6,7,8,9,10,11]

    return (
      <footer className={classes.Footer}>
         <ul>
          {links.map(link=> <Link key={link.toString()} id={link}/>)}
          <img src={blueOrigami} alt="blue Origami image"/>
        </ul>
        <p>Software University &copy; 2021</p>
      </footer>
    )
  }
}

export default Footer
