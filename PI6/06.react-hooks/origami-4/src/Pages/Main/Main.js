import classes from './Main.module.css';
import Posts from '../../components/Posts/Posts';


const Main = (props) => {
  return (
    <main className={classes.Main}>
      <h1>Publications</h1>
      <Posts posts={props.posts}/>
    </main>
  )
}

export default Main

