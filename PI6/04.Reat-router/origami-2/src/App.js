import React, { Component, lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import classes from './App.module.css';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import { getPosts } from './services';

import { Switch, Route } from 'react-router-dom';

export class App extends Component {
  state = { posts: [] };

  componentDidMount() {
    const res = getPosts();
    res.then((posts) => {
      this.setState({ posts: posts });
    });
  }

  render() {
    const Main = lazy(() => import('./Pages/Main/Main.js'));
    const Post = lazy(() => import('./Pages/Post/Post.js'));
    const Register = lazy(() => import('./Pages/Register/Register.js'));
    const Login = lazy(() => import('./Pages/Login/Login.js'));
    const Profile = lazy(() => import('./Pages/Profile/Profile.js'));
    const NotFound = lazy(() => import('./Pages/NotFound/NotFound.js'));

    const links = [
      'home',
      'post',
      'register',
      'login',
      'profile',
      '#######',
      '#######',
      '#######',
      '#######',
      '#######',
      '#######',
    ];

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
                render={(props) => <Main {...props} posts={this.state.posts} />}
              />
              <Route
                path='/post'
                exact
                render={(props) => <Post {...props} posts={this.state.posts} />}
              />
              <Route
                path='/register'
                exact
                component={Register}/>
              <Route
                path='/login'
                exact
                component={Login}/>
                 <Route
                path='/profile'
                exact
                render={(props) => <Profile {...props} posts={this.state.posts} />}
              />
               <Route component={NotFound}/>
            </Switch>
          </Suspense>
        </div>
        <Footer links={links} />
      </div>
    );
  }
}

export default App;
