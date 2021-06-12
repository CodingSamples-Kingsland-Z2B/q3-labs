const express = require('express');
// const bodyParser = require('body-parser');
const indexRoutes = require('./routes/app');
const app = express();

const port = 4500;

app.use(express.urlencoded({extended:false}))
app.use('/public', express.static('public'))

app.use(indexRoutes);


app.use((req, res)=>{
  res.send(`404: Page not found`)
})

app.listen(port, ()=>{
  console.log(`Server running on port: ${port}`)
})




