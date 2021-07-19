import React, { lazy, Suspense , useState, useEffect} from 'react';
import Navigation from './components/Navigation/Navigation';
import classes from './App.module.css';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import { getPosts } from './services';

import { Switch, Route } from 'react-router-dom';


const App = ()=>{

  const Main = lazy(() => import('./Pages/Main/Main.js'));
  const Post = lazy(() => import('./Pages/Post/Post.js'));
  const Register = lazy(() => import('./Pages/Register/Register.js'));
  const Login = lazy(() => import('./Pages/Login/Login.js'));
  const Profile = lazy(() => import('./Pages/Profile/Profile.js'));
  const NotFound = lazy(() => import('./Pages/NotFound/NotFound.js'));

  const [posts, setPosts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false)

  const fetchPosts = ()=>{
    const res = getPosts();
    res.then((posts) => {
      setPosts(posts.reverse())
    });
  }


  useEffect(()=>{fetchPosts()}, [])

  const auth = (authState)=>{
    setLoggedIn(authState)
  }

  let links = ['register', 'login']
  if(loggedIn){
    links = ['post', 'profile'];
  } 

  return (
    <div>
      <Navigation links={links} />
      <div className={`${classes.App} ${classes.Container}`}>
        <Aside links={links} />
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Switch>
            <Route
              path='/'
              exact
              render={(props) => <Main {...props} posts={posts} />}
            />
            <Route
              path='/post'
              exact
              render={(props) => <Post {...props} posts={posts} fetchPosts={fetchPosts}/>}
            />
            <Route
              path='/register'
              exact
              component={Register}/>
            <Route
              path='/login'
              exact
              render={(props)=> <Login {...props} auth={auth}/>}/>
                <Route
              path='/profile'
              exact
              render={(props) => <Profile {...props} posts={posts} auth={auth} user={JSON.parse(localStorage.getItem('user'))}/>}
            />
              <Route component={NotFound}/>
          </Switch>
        </Suspense>
      </div>
      <Footer links={links} />
    </div>
  );
  }


export default App;
