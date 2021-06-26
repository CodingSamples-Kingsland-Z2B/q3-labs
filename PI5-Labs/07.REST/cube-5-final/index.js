const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const cubeRoutes = require('./routes/cube');
const accessoryRoutes = require('./routes/accessory');
const authRoutes = require('./routes/auth');

const app = express();

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const dbUrl= `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.efrmq.mongodb.net/${process.env.MONGO_DB}`



// configure multer 
const fileStorage = multer.diskStorage(
  {
    destination: (req, file, cb)=>{
      cb(null, 'images' );
    }, 
    filename: (req, file, cb)=>{
      cb(null, Date.now()+'-'+file.originalname)
    }
  }
  )

  const filefilter = (req, file, cb)=>{
    if(file.mimetype ==='image/png' || file.mimetype ==='image/jpg' || file.mimetype ==='image/jpeg' ){
      cb(null, true);
    }else{
      cb(null, false);
    } 
  }

app.use(multer({storage: fileStorage, fileFilter:filefilter}).single('imageUrl'))

// Middlewears 
app.use( bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods',
  'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers',
  'Content-Type, Authorization');
  next();
  });


app.use( '/api/cubes',cubeRoutes);   
app.use('/api/accessory', accessoryRoutes)
app.use('/api/users',authRoutes);



// Express error handling
app.use((error, req, res, next)=>{
  // console.log(error)
    const status = error.statusCode  || 500;
    const message = error.message;
    const data = error.data; 
    res.status(status).json({message, data })
})




  
// Connecting to db and run the server 
mongoose.connect(dbUrl,  { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
  console.log('Connected to DB');
  app.listen(port, console.log(`Listening on port ${port}! Now its up to you...`));
}).catch((err)=>{
  console.log(err)
})

