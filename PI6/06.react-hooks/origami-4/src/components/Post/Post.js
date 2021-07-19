import classes from './Post.module.css';
import logo from '../../assets/blue-origami-bird.png'

const Post = (props) => {
  return (
    <div className={classes.Post}>
    <img src={logo} alt="Origami" />
    <p className={classes.description}> {props.description}</p>
    <div>
      <span> <small>Author : </small> {props.author}</span>
    </div>
  </div>
    )
}

export default Post

