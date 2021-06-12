const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');

const port = 4500;


app.use(indexRoutes)

app.use((req, res, next)=>{
  console.log('[request received]: ' + req.url )
  next();
})



app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`)
})