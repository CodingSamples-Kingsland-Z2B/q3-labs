import React, { useState } from 'react'
import classes from './Login.module.css'
import {login} from '../../services'

const  Login = (props)=> {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameChangeHandler = (e)=>{
   setUsername(e.target.value)
  }

  const passwordChangeHandler = (e)=>{
   setPassword(e.target.value)
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    if(username !=='' && password !==''){
      login(username, password).then(res=>{
        // redirect /
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user))
        props.history.push('/')
        props.auth(localStorage.getItem('token'))
      }).catch(error=>{
        props.history.push('/login')
      })
    }
  }

    return (
      <div className={classes.Register}>
        <h1>Login Page</h1>
        
        <form onSubmit={submitHandler}>
          <div className={classes['form-control']}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={usernameChangeHandler} value={username}/>
          </div>
          <div className={classes['form-control']}>
            <label htmlFor="">Password</label>
            <input type="password" id="password" name="password" onChange={passwordChangeHandler} value={password}/>
          </div>
          <div className={classes['form-control']}>
              <button type="submit"> Login</button>  
          </div>
        </form>
      </div>
    )
}

export default Login
