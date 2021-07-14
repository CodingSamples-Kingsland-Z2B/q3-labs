import React, { Component } from 'react'
import classes from './Login.module.css'

export class Login extends Component {
  render() {
    return (
      <div className={classes.Register}>
        <h1>Login Page</h1>
        
        <form>
          <div className={classes['form-control']}>
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>

          <div className={classes['form-control']}>
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>



          <div className={classes['form-control']}>
              <button type="submit"> Login</button>  
          </div>

        </form>
      </div>
    )
  }
}

export default Login
