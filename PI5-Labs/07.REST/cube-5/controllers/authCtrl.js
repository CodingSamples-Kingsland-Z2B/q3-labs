const User = require('../models/user');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const transporter = nodemailer.createTransport({
  service:'gmail', 
  auth:{
    user:'cubekingsland@gmail.com', 
    pass:'Cube@2020'
  }
})


exports.signup = (req, res)=>{

  const email = req.body.email
  const password = req.body.password
  const username = req.body.username;
  const errors = validationResult(req);


    if(!errors.isEmpty()){
      const error = new Error('Validation Failed');
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }
  
   bcrypt.hash(password, 12).then(hash => {
      const user = new User({password:hash, email, username});
      return user.save()
      }).then(result=>{
       res.status(201).json({message:'User created', userId: result._id})
        return transporter.sendMail({
          to:email, 
          from:'cubekingsland@gmail.com', 
          subject:'Signed Up Sccessfully !', 
          html:`<h1> Welcome to our App, you successfly signed up</h1>`
        })
    }).then(result=> {
      console.log(result)
    }).catch(err=>{
      if(!err.statusCode){
        err.statusCode = 500;
      }
      next(err)
    });
}

exports.login = (req, res)=>{

  const password = req.body.password;
  const username = req.body.username;

  const errors = validationResult(req);

  // if there is errors 
  if(!errors.isEmpty()){
    const error = new Error('Validation Failed');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  // check my db if the username exists 

  User.findOne({username: username}).then(user=>{
    //b. false: message invalid username or password => /login 
    if(!user){
      const error = new Error('A username could not be found');
      error.statusCode = 401;
      throw error;
    }

    //1. true: compare the password he entered with the password hash stored in the db 
    bcrypt.compare(password, user.password).then(match=>{

      if(!match){
        const error = new Error('wrong password');
        error.statusCode = 422;
        throw error;
      }

      const token = jwt.sign({email:user.email, userId:user._id.toString()}, 'kingsland', {expiresIn:'1h'});
      res.status(200).json({message:'loggedIn successfully ', token:token})




    })
  }).catch(err=> {
    console.log(err);
    res.redirect('/login');
  })

}

exports.logout = (req, res)=>{
  req.flash('success', 'Logged out')
  req.session.destroy( err=>{
    console.log(err);
  
    res.redirect('/')
  })
}

