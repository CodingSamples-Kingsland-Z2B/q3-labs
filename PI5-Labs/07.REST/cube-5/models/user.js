const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({

  username:{
    type:String, 
    required: true, 
    unique: true
  },
  password:{
    type:String, 
    required: true, 
  }, 
  email:{
    type:String, 
    required: true, 
    unique:true
  }, 
  resetToken:String, 
  resetTokenExpiration: Date


})


module.exports = mongoose.model('User', userSchema);