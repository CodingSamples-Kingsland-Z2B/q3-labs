const cookieParser  = require('cookie-parser');
const express = require('express');
const app = express();


app.use(cookieParser());


app.get('/', (req, res)=>{
  res.send('Home Page')
})

app.get('/set', (req, res)=>{
  console.log('setting a cookie')
  res.cookie('message','Hello world');
  res.end('Cookie set ')
  
})

app.get('/get', (req, res)=>{

  res.json(req.cookies)
})



app.listen(3000, ()=>{
  console.log('server is running ')
})