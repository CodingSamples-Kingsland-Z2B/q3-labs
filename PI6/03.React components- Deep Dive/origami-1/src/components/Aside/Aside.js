import React, { Component } from 'react'
import classes from './Aside.module.css';
import Link from '../Link/Link';
export class Aside extends Component {
  render() {

    const links = [1,2,3,4,5,6,7,8,9,10,11]
    return (
      <aside className={classes.Aside}>
        <ul>
          {links.map(link=> <Link key={link.toString()} id={link}/>)}
        </ul>
      </aside>
    )
  }
}

export default Aside
