import React, { Component } from 'react'

export class Login extends Component {


  state = {email:'', password:'', emailValid:false, passwordValid:false, emailTouched:false, passwordTouched:false}

  emailChangeHandler(e){
    this.setState({email:e.target.value})  
    if(e.target.value.trim() !==''){
      this.setState({emailValid:true})
    }
  }


  passwordChangeHandler(e){
   this.setState({password:e.target.value})
   if(e.target.value.trim() !==''){
    this.setState({passwordValid:true})
  }
  }


  submitHandler(event){
    event.preventDefault();

    if(this.state.email.trim() ===''|| this.state.password.trim()===''){

      if(this.state.email.trim()===''){
        this.setState({emailValid:false})
      }

      if(this.state.password.trim()===''){
        this.setState({passwordValid:false})
      }
        return
    }
    console.log(this.state);
    this.setState({email:'', password:''})
  }



  emailBlur(){
    this.setState({emailTouched:true})
    if(this.state.email.trim()===''){
      this.setState({emailValid:false})
    }
  }

  passwordBlur(){
    this.setState({passwordTouched:true})
    if(this.state.password.trim()===''){
      this.setState({passwordValid:false})
    }
  }
  render() {

    const emailInvalid = !this.state.emailValid && this.state.emailTouched;
    const passwordInvalid = !this.state.passwordValid && this.state.passwordTouched;

    const emailClasses = !emailInvalid? 'form-control': 'form-control invalid';
    const passwordClasses = !passwordInvalid? 'form-control': 'form-control invalid';
    
    return (
 
      <form onSubmit={(event)=>{this.submitHandler(event)}}>
        <div className={emailClasses}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email"  
          onChange={(e)=>{this.emailChangeHandler(e)}} 
          value={this.state.email}
          onBlur={()=>{this.emailBlur()}}
          />
          {emailInvalid&&<p>Email is required</p>}
        </div>

        <div className={passwordClasses}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" 
          onChange={(e)=>{this.passwordChangeHandler(e)}} 
          value={this.state.password}
          onBlur={()=>{this.passwordBlur()}}
          />
          {passwordInvalid&&<p>Email is required</p>}
        </div>

        <div className="form-control text-center">
   
          <button> Submit</button>
        </div>

        
      </form>
    )
  }
}

export default Login
