import React, { Component } from 'react'
import classes from './Main.module.css';
import Posts from '../../components/Posts/Posts';

export class Main extends Component {
  render() {
    return (
      <main className={classes.Main}>
        <h1>Publications</h1>
        <Posts posts={this.props.posts}/>
      </main>
    )
  }
}

export default Main
