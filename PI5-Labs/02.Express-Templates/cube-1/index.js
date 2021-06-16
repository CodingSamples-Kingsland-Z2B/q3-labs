const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cubeRoutes = require('./routes/cube');

const app = express();

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

// Setup the engine 
app.engine('hbs', handlebars({
  extname:'.hbs', 
  partialsDir:__dirname+'/views/partials', 
  
}))

app.set('views', __dirname+'/views');

app.set('view engine', 'hbs')


// Middlewears 
app.use(express.static('static'));
app.use( bodyParser.urlencoded({extended:false}));


app.use(cubeRoutes);

app.use((req, res)=>{
  res.render('404.hbs')
})



app.listen(port, console.log(`Listening on port ${port}! Now its up to you...`));