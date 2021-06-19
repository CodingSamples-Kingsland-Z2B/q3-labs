const express = require('express');
const session = require('express-session')
const app = express();

app.use(session({
  secret: '%3A52u_51kFCjjbwayE1n8OXukVYW7PfTtt.%2Fu3JHbVARNpvToRBrDe5n58JjoKSsZtRy326aoxy7%2Fo',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }

}))

app.get('/set',(req, res)=>{
  req.session.message = 'Hello world'
  res.send('Session stored');
})

app.get('/get',(req, res)=>{
  res.json(req.session.message);
})


app.listen(3000,()=>{
  console.log('server is running ')
})