const User = require('../models/user');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const transporter = nodemailer.createTransport({
  service:'gmail', 
  auth:{
    user:'cubekingsland@gmail.com', 
    pass:'Cube@2020'
  }
})

exports.getLogin = (req, res)=>{
  res.render('auth/loginPage.hbs', {docTitle:'Login'})
}

exports.getSignup = (req, res)=>{
  res.render('auth/registerPage.hbs' ,{docTitle:'Register'})
}

exports.postSignup = (req, res)=>{

  const email = req.body.email
  const password = req.body.password
  const password2 = req.body.password2;
  const username = req.body.username;

  // Makesure username is not taken username, => registeration page
  User.find({username:username}).then(userData=>{
    if(userData.length>0){
        req.flash('error', 'Username is taken, try another one');
        return res.redirect('/register');
    }
  })
  
  // Makesure email is not registered before  => login page
  User.find({email:email}).then(userData=>{
    if(userData.length>0){
      req.flash('error', 'This email already have an account');
      return res.redirect('/login');
    }
     // hash the password and store the user in the db  => redirect him to home page 
    return bcrypt.hash(password, 12).then(hash => {
      // You want to create the user object with the encrypted password 
      const user = new User({password:hash, email, username});
      return user.save()
      })
    }).then(result=>{
        res.redirect('/login'); 
        return transporter.sendMail({
          to:email, 
          from:'cubekingsland@gmail.com', 
          subject:'Signed Up Sccessfully !', 
          html:`<h1> Welcome to our App, you successfly signed up</h1>`
        })
    }).then(result=> {
      console.log(result)
    }).catch(err=> console.log(err));
}

exports.postLogin = (req, res)=>{

  const password = req.body.password;
  const username = req.body.username;

  // check my db if the username exists 

  User.findOne({username: username}).then(user=>{
    //b. false: message invalid username or password => /login 
    if(!user){
      req.flash('error', 'Invalid email or password');
      return res.redirect('/login')
    }

    //1. true: compare the password he entered with the password hash stored in the db 
    bcrypt.compare(password, user.password).then(match=>{

      if(match){
        // a. true: store in session 'isLoggedIn: true',  req.session.user
        req.session.isLoggedIn = true;
        req.session.user = user;
        // Store the session in db
        return req.session.save((err)=>{
          console.log(err);
          req.flash('success', 'LoggedIn successfully');
          res.redirect('/')
        })
      }
     // b. false: message invalid username or password => /login 
     req.flash('error', 'Invalid email or password');
     return res.redirect('/login')
    })
  }).catch(err=> {
    console.log(err);
    res.redirect('/login');
  })

}


exports.getLogout = (req, res)=>{
  req.flash('success', 'Logged out')
  req.session.destroy( err=>{
    console.log(err);
  
    res.redirect('/')
  })
}

exports.getReset = (req, res)=>{
  res.render('auth/reset', {docTitle:'Reset Password'})
}

exports.postReset = (req, res)=>{

 const email = req.body.email; 
// Create a token 
crypto.randomBytes(32, (err, buffer)=>{
  if(err){
    return res.redirect('/reset');
  }

  const token = buffer.toString('hex')  // generated token 
// Find the user who wants to reset his password 
  User.findOne({email: email}).then(user=>{
    if(!user){
      res.flash('error', 'No account with this email')
    }
    // update the user add the token and the expiration to his document in the DB 
    user.resetToken = token; 
    user.resetTokenExpiration = Date.now() +3600000; 
    return user.save();
// email  http://localhost:4500/reset/${token}
    }).then(result=>{
      req.flash('success', 'Check your email !') 
      res.redirect('/')
        return transporter.sendMail({
          to:email, 
          from:'cubekingsland@gmail.com',
          subject:'Password Reset', 
          html: `
          <p> You requested a password Reset </p>
          <p> Click the link <a href="http://localhost:4500/reset/${token}"> Reset Link </a> to reset your password</p>
          `
        })
    }).then(info=> {console.log(info)}).catch(err=> console.log(err))

})



}


exports.getNewPassword = (req, res)=>{

  const token = req.params.token;
  // find the user 1. same token, 2. token is not expired 
  User.findOne({resetToken: token, resetTokenExpiration: {$gt: Date.now() } }).then(user=>{
    console.log(user);
    if(!user){
      return res.redirect('/login');
    }

    res.render('auth/newpassword', {docTitle:'Reset Password', userId:user._id, token})
  }).catch(err=> console.log(err))
}


exports.postNewPassword = (req, res)=>{

  console.log(req.body)
  const newPassword = req.body.password;
  const userId = req.body.userId;
  const token = req.body.token;

  let resetUser;
  // Find a user token, expiration date, userid

  User.findOne({
    resetToken:token, 
    resetTokenExpiration: {$gt: Date.now()}, 
    _id: userId
  }).then( user=>{

    if(user){
      resetUser = user;
      return bcrypt.hash(newPassword, 12)
    }
    
  }).then(hash=>{
    resetUser.password = hash;
    resetUser.resetToken = null; 
    resetUser.resetTokenExpiration = undefined;
    return resetUser.save()

  }).then(result=> {
    req.flash('success', 'Password resetted');
    res.redirect('/login')
  })
}