import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import classes from './App.module.css';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { getPosts } from './services';

import Posts from './components/Posts/Posts';

export class App extends Component {
  state = { posts: [] };

  componentDidMount() {
    const res = getPosts();
    res.then((posts) => {
      this.setState({ posts: posts });
    });
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className={`${classes.App} ${classes.Container}`}>
          <Aside />
          <Main>
            <Posts posts={this.state.posts} />
          </Main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
