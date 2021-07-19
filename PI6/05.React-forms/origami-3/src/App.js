import React, { Component, lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import classes from './App.module.css';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import { getPosts } from './services';

import { Switch, Route } from 'react-router-dom';

export class App extends Component {
  state = { posts: [] , loggedIn: false};

  componentDidMount() {

    this.fetchPosts();
  }

  auth(authState){
    this.setState({loggedIn:authState})
  }

  fetchPosts(){
    const res = getPosts();
    res.then((posts) => {
      this.setState({ posts: posts.reverse() });
    });
  }


  render() {
    const Main = lazy(() => import('./Pages/Main/Main.js'));
    const Post = lazy(() => import('./Pages/Post/Post.js'));
    const Register = lazy(() => import('./Pages/Register/Register.js'));
    const Login = lazy(() => import('./Pages/Login/Login.js'));
    const Profile = lazy(() => import('./Pages/Profile/Profile.js'));
    const NotFound = lazy(() => import('./Pages/NotFound/NotFound.js'));

    let links = ['register', 'login']
    if(this.state.loggedIn){
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
                render={(props) => <Main {...props} posts={this.state.posts} />}
              />
              <Route
                path='/post'
                exact
                render={(props) => <Post {...props} posts={this.state.posts} fetchPosts={this.fetchPosts.bind(this)}/>}
              />
              <Route
                path='/register'
                exact
                component={Register}/>
              <Route
                path='/login'
                exact
                render={(props)=> <Login {...props} auth={this.auth.bind(this)}/>}/>
                 <Route
                path='/profile'
                exact
                render={(props) => <Profile {...props} posts={this.state.posts} auth={this.auth.bind(this)} user={JSON.parse(localStorage.getItem('user'))}/>}
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
