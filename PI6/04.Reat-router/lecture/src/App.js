import React, { Component, lazy } from 'react';
import { Route, Link, Switch , Redirect, NavLink} from 'react-router-dom';
import './App.css'

class About extends Component {

  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return <h1> About Page</h1>;
  }
}

class Users extends Component {

  render() {
    return (
      <div>
    <h1> Users Page</h1>


      </div>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink  activeStyle={{backgroundColor:'indigo', color:'white'}} exact to='/' >Home</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{backgroundColor:'indigo', color:'white'}} to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to='/users'>Profile</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export class App extends Component {
  render() {

   const Home = lazy(()=>import('./Home.js'))

   const loggedIn = true;
    return (
      <div>
        <Navigation />
        {/* <Route  path="/" exact component={Home}/> */}

        {/* <Route path="/">
          <Home title="Home Page"/>
        </Route> */}

        <Switch>

          <Route
            path='/'
            exact
            render={(props) => <Home {...props} title='Home Page' />}
          />

          <Route path='/about' component={About} />

          <Route path='/users' render={()=>(!loggedIn? <Redirect exact from="/users" to="/"/> : <Users/> )} />
        </Switch>
      </div>
    );
  }
}

export default App;
