const { body } = require('express-validator');
const User = require('../models/user');

exports.loginValidator = (req, res) => {
  return [
    body('username')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide username')
      .isAlphanumeric()
      .withMessage('Username should be Alphanumeric')
      .isLength({ min: 5, max: 20 })
      .withMessage('Username should be between 5-20 characters'),
    body('password', 'Check your password')
      .isAlphanumeric()
      .isLength({ min: 8, max: 20 }),
  ];
};

exports.signupValidator = (req, res) => {
  return [
    body('username')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide username')
      .isAlphanumeric()
      .withMessage('Username should be Alphanumeric')
      .isLength({ min: 5, max: 20 })
      .withMessage('Username should be between 5-20 characters')
      .custom((value) => {
        return User.findOne({ username: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject('Username is taken');
          }
        });
      }),

    body('email')
      .isEmail()
      .withMessage('Check email enetered')
      .normalizeEmail()
      .custom((value) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject('This email registerd to a user ');
          }
        });
      }),

    body('password', 'Please enter valid Password')
      .isAlphanumeric()
      .isLength({ min: 8, max: 20 })
      .trim(), 

    body('password2').custom((value, {req})=>{
        if(value !==req.body.password){
          throw new Error('Password Not Matching')
        }        
          return true
    })
  ];
};
