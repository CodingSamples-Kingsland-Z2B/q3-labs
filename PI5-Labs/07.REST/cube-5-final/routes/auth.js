const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authCtrl');
const {loginValidator, signupValidator} = require('../validation/auth-validation')


router.post('/login', loginValidator(), authCtrl.login);
router.get('/logout', authCtrl.logout);
router.post('/signup', signupValidator(), authCtrl.signup);


module.exports = router;
