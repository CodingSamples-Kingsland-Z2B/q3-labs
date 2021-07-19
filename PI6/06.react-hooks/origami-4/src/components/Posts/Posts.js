import Post from '../Post/Post';
import classes from './Posts.module.css';

const Posts = (props) => {
  const posts = props.posts.map(post=> <Post key={post._id} description={post.description} author={post.author.username}/>)

  if(props.last && props.last <= props.posts.length ){
    posts.splice(props.last)
  }

  return (
    <div className={classes.Posts}>
        {posts}
    </div>
  )
}

export default Posts


