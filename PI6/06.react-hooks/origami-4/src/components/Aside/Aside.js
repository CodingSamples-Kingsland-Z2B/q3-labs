import React  from 'react'
import classes from './Aside.module.css';
import Link from '../Link/Link';

const Aside = (props) => {

    return (
      <aside className={classes.Aside}>
        <ul>
        {props.links.map((link,i)=> <Link key={i.toString()} id={link}/>)}
        </ul>
      </aside>
    )
}

export default Aside

