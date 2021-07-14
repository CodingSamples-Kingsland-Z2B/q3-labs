import React, { Component } from 'react'
import classes from './Register.module.css';

export class Register extends Component {
  render() {
    return (
      <div className={classes.Register}>
        <h1>Register Page</h1>
        
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
            <label htmlFor="">Re-Password</label>
            <input type="password" />
          </div>

          <div className={classes['form-control']}>
              <button type="submit"> Register</button>  
          </div>

        </form>
      </div>
    )
  }
}

export default Register
