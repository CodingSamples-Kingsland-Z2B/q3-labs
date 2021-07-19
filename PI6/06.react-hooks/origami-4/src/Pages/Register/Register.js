import React, { useState } from 'react'
import classes from './Register.module.css';
import {register} from '../../services';

const Register = (props)=> {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  const [, setPassword2] = useState('');


  const submitHandler = (e)=>{
    e.preventDefault();
    if(username !=='' && password !==''){
      register(username, password).then(res=>{
        // redirect /
        props.history.push('/login')
      }).catch(error=>{
        props.history.push('/register')
      })
    }

  }

    return (
      <div className={classes.Register}>
        <h1>Register Page</h1>
        
        <form onSubmit={submitHandler}>
          <div className={classes['form-control']}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={(e)=>{setUsername(e.target.value)}}/>
          </div>

          <div className={classes['form-control']}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>

          <div className={classes['form-control']}>
            <label htmlFor="password2">Re-Password</label>
            <input type="password" id="password2" name="password2" onChange={(e)=>{setPassword2(e.target.value)}}/>
          </div>

          <div className={classes['form-control']}>
              <button type="submit"> Register</button>  
          </div>

        </form>
      </div>
    )

}

export default Register
