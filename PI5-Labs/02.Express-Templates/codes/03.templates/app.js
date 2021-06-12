const express = require('express');
const expressHbs = require('express-handlebars');
const app = express();
const path = require('path')


app.engine('hbs', expressHbs({
  extname:'.hbs', 
  partialsDir:__dirname+'/templates/partials'
}))

app.set('view engine' , 'hbs')

app.set('views', path.join(__dirname,'templates'))

app.get('/', (req, res)=>{
  res.render('../templates/home.hbs', {title:'My Page'})
})



app.listen(4500 ,()=>{
  console.log(`Server runs on port : 4500`)
})