import classes from './Link.module.css';
import {Link as A} from 'react-router-dom'


const Link = (props) => {

  let url = props.id;
    
  if(props.id ==='home'){
    console.log(url);
    url='';
  }

  return (
    <li className={classes.listItem}>
      <A to={`/${url}`} className={classes.capitalize}>{props.id}</A>
    </li>
  )
}

export default Link
