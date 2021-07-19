import React, { Component } from 'react'

export class Form extends Component {


  emailRef = React.createRef();
  password = React.createRef();
  state = {email:'', password:''}

  // emailChangeHandler(e){
  //   this.setState({email:e.target.value})  
  // }


  // passwordChangeHandler(e){
  //  this.setState({password:e.target.value})
  // }


  // submitHandler(event){
  //   event.preventDefault();
  //   console.log(this.state);
  //   this.setState({email:'', password:''})
  // }


  // handleChange(e){
  //   let stateName = e.target.name;
  //   let newStateVal = e.target.value;
  //   this.setState({[stateName]: newStateVal})
  // }


  submitHandler(e){
    e.preventDefault();
    console.log({
      email: this.emailRef.current.value,
      password: this.password.current.value
    })

    this.emailRef.current.value = ''  //DO NOT DO IT 
    this.password.current.value =''  

  }

  render() {
    return (
 
      <form onSubmit={(event)=>{this.submitHandler(event)}}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          {/* <input type="text" id="email"  onChange={(e)=>{this.emailChangeHandler(e)}} value={this.state.email}/> */}
          <input type="text" name="email" id="email" ref={this.emailRef}/>
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          {/* <input type="password" id="password" onChange={(e)=>{this.passwordChangeHandler(e)}} value={this.state.password}/> */}
          <input type="password" id="password" ref={this.password}/>
        </div>

        <div className="form-control text-center">
   
          <button> Submit</button>
        </div>

        
      </form>
    )
  }
}

export default Form
