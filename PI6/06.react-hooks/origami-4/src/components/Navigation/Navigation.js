import classes from './Navigation.module.css';
import Link from '../Link/Link';
import whiteOrigami from '../../assets/white-origami-bird.png'

const Navigation = (props) => {
  return (
    <nav className={classes.Navigation}>
    <ul>
      <img src={whiteOrigami} alt="white Origami" />
      {props.links.map((link,i)=> <Link key={i.toString()} id={link}/>)}
    </ul>
  </nav>
  )
}

export default Navigation



