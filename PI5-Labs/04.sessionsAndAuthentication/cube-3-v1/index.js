const express = require('express');
const session = require('express-session');
const User = require('./models/user')
const  MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const flash = require('connect-flash');

const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cubeRoutes = require('./routes/cube');
const accessoryRoutes = require('./routes/accessory');
const authRoutes = require('./routes/auth');


const app = express();

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const dbUrl= `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.efrmq.mongodb.net/${process.env.MONGO_DB}`

// Setup the engine 
app.engine('hbs', handlebars({
  extname:'.hbs', 
  partialsDir:__dirname+'/views/partials', 
  
}))
app.set('views', __dirname+'/views');
app.set('view engine', 'hbs')



// Setting up session middleware 
const  store = new MongoDBStore({
  uri: dbUrl,
  collection: 'sessions'
});

app.use(session({
  secret: 'my secret', 
  resave:false, 
  saveUninitialized:false, 
  store:store
}))

app.use(flash());

// session Strategy 
  // if no user next 
  // if i have a user req.user

app.use((req, res, next)=>{
  if(!req.session.user){
    return next();
  }
  User.findById(req.session.user._id).then(user=>{
    req.user = user;
    next();
  })
})

// Use Local variables 
app.use((req, res, next)=>{
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.errorMessage = req.flash('error');
  res.locals.successMessage = req.flash('success');
  next();
})

// Middlewears 
app.use(express.static('static'));
app.use( bodyParser.urlencoded({extended:false}));


app.use(cubeRoutes);
app.use(accessoryRoutes)
app.use(authRoutes);

app.use((req, res)=>{
  res.render('404.hbs')
})


// Connecting to db and run the server 
mongoose.connect(dbUrl,  { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
  console.log('Connected to DB');
  app.listen(port, console.log(`Listening on port ${port}! Now its up to you...`));
}).catch((err)=>{
  console.log(err)
})

