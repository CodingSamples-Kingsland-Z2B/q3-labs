import React, {useState, useEffect} from 'react'
import { Container, Card, CardContent, Typography, TextField, Button } from '@material-ui/core'

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false)

  const [password, setPassword] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false)

  const [formValid, setFormValid] = useState(false)

  const passwordCheck = password.trim().length>5;
  const emailCheck = email.includes('@');
  const invalidEmail = !emailCheck && emailTouched;
  const invalidPassword = password.trim().length<5 && passwordTouched;



  useEffect(()=>{

   const id= setTimeout(()=>{
    console.log('Validate Form')
        setFormValid(email.includes('@') && password.trim().length>5)
    }, 500)

    // Cleanup
    return ()=>{
        clearTimeout(id)
    }

  }, [email, password])

  const emailChangeHandler = (event)=>{
    setEmail(event.target.value);
  }

  const validateEmailHandler = ()=>{
    setEmailTouched(true)
  }

  const validatePasswordHandler = ()=>{
    setPasswordTouched(true)
  }

  const passwordChangeHandler = (event)=>{
    setPassword(event.target.value);
  }


  const submitHandler = (event)=>{
    event.preventDefault();
    props.onLogin(email, password)
  }
  return (
    <Container maxWidth="sm">
      <Card style={{marginTop:'50px'}} elevation={4}>
        <CardContent>
           <Typography variant="h5" align="center" color="primary"> Login</Typography>
           <form noValidate autoComplete="off" onSubmit={ submitHandler}>
             <TextField 
              id="email" 
              label="email" 
              variant="outlined" 
              fullWidth
              style={{margin:'1rem 0'}}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
              value={email}
              error={invalidEmail}
              helperText={invalidEmail&&'Please Enter valid Email'}
              />
             <TextField 
              id="password" 
              label="password" 
              variant="outlined" 
              fullWidth
              style={{margin:'1rem 0'}}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              value={password}
              error={invalidPassword}
              helperText={invalidPassword&&'Please Enter valid Password'}
              />
             <Typography align="center"> 
               <Button variant="contained" color="primary" disabled={!formValid} type="submit"> Login</Button>
             </Typography>
           </form>
        </CardContent>
      </Card>

    </Container>
  )
}

export default Login
