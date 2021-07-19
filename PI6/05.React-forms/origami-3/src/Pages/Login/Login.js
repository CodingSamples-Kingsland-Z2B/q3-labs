import React, { Component } from 'react'
import classes from './Login.module.css'
import {login} from '../../services'
export class Login extends Component {

  state = {username:'', password:''}
  
  handleChange(e){
    let stateName = e.target.name; 
    let newStateVal = e.target.value;
    this.setState({[stateName]: newStateVal})
  }

  submitHandler(e){
    e.preventDefault();
    if(this.state.username !=='' && this.state.password !==''){
      login(this.state.username, this.state.password).then(res=>{
        // redirect /
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user))
        this.props.history.push('/')
        this.props.auth(localStorage.getItem('token'))
      }).catch(error=>{
        this.props.history.push('/login')
      })
    }
  }
  render() {
    return (
      <div className={classes.Register}>
        <h1>Login Page</h1>
        
        <form onSubmit={(e)=>{this.submitHandler(e)}}>
          <div className={classes['form-control']}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={(e)=>{this.handleChange(e)}}/>

          </div>

          <div className={classes['form-control']}>
            <label htmlFor="">Password</label>
            <input type="password" id="password" name="password" onChange={(e)=>{this.handleChange(e)}}/>
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
