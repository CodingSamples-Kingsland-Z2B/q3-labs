import React, { Component } from 'react'
import classes from './Main.module.css';

export class Main extends Component {
  render() {
    return (
      <main className={classes.Main}>
        <h1>Soooooo Heading</h1>
        {this.props.children}
      </main>
    )
  }
}

export default Main
