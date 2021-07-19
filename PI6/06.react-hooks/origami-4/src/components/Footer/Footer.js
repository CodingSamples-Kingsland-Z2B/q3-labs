import classes from './Footer.module.css';
import blueOrigami from '../../assets/blue-origami-bird-flipped.png';
import Link from '../Link/Link';

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
    <ul>
    {props.links.map((link,i)=> <Link key={i.toString()} id={link}/>)}
     <img src={blueOrigami} alt="blue Origami"/>
   </ul>
   <p>Software University &copy; 2021</p>
 </footer>
  )
}

export default Footer
