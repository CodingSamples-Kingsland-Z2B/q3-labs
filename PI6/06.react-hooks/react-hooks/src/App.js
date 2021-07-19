import {Fragment, useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    console.log('App get mounted ')
    const checkLogin = localStorage.getItem('loggedIn')
    if(checkLogin ==='1'){
      setIsLoggedIn(true)
    }
  }, [])

// When then app get mounted and updated (re-rendered)
  // useEffect(()=>{
  //   console.log('App mounted or updated') 
  // })


  const loginHandler = (email, password) => {
    localStorage.setItem('loggedIn', '1')
    setIsLoggedIn(true);
  }

 


  return (
   <Fragment>
       <Header/>
       {!isLoggedIn? <Login onLogin={loginHandler}/> :<h1>Welcome back</h1>}
      
    </Fragment>
  );
}

export default App;
