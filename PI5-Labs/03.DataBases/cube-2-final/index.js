const express = require('express');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cubeRoutes = require('./routes/cube');
const accessoryRoutes = require('./routes/accessory');

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
app.use(accessoryRoutes)

app.use((req, res)=>{
  res.render('404.hbs')
})


// Connecting to db and run the server 
const dbUrl= `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.efrmq.mongodb.net/${process.env.MONGO_DB}`
mongoose.connect(dbUrl,  { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
  console.log('Connected to DB');
  app.listen(port, console.log(`Listening on port ${port}! Now its up to you...`));
}).catch((err)=>{
  console.log(err)
})

