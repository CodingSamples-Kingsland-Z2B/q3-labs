import React, { Component } from 'react'
import classes from './Aside.module.css';
import Link from '../Link/Link';
export class Aside extends Component {
  render() {


    return (
      <aside className={classes.Aside}>
        <ul>
        {this.props.links.map((link,i)=> <Link key={i.toString()} id={link}/>)}
        </ul>
      </aside>
    )
  }
}

export default Aside
