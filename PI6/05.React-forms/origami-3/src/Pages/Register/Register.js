import React, { Component } from 'react'
import classes from './Register.module.css';
import {register} from '../../services';

export class Register extends Component {

  state = {username:'', password:'', password2:''}


  handleChange(e){
    let stateName = e.target.name; 
    let newStateVal = e.target.value;
    this.setState({[stateName]: newStateVal})
  }

  submitHandler(e){
    e.preventDefault();
    if(this.state.username !=='' && this.state.password !==''){
      register(this.state.username, this.state.password).then(res=>{
        // redirect /
        this.props.history.push('/login')
      }).catch(error=>{
        this.props.history.push('/register')
      })
    }
  }

  render() {
    return (
      <div className={classes.Register}>
        <h1>Register Page</h1>
        
        <form onSubmit={(e)=>{this.submitHandler(e)}}>
          <div className={classes['form-control']}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={(e)=>{this.handleChange(e)}}/>
          </div>

          <div className={classes['form-control']}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e)=>{this.handleChange(e)}}/>
          </div>

          <div className={classes['form-control']}>
            <label htmlFor="password2">Re-Password</label>
            <input type="password" id="password2" name="password2" onChange={(e)=>{this.handleChange(e)}}/>
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
