const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authCtrl');

router.get('/login', authCtrl.getLogin);
router.post('/login', authCtrl.postLogin)
router.get('/register', authCtrl.getSignup);
router.get('/logout', authCtrl.getLogout);
router.post('/register', authCtrl.postSignup);
router.get('/reset/:token', authCtrl.getNewPassword)
router.get('/reset', authCtrl.getReset);
router.post('/reset', authCtrl.postReset);
router.post('/new-password', authCtrl.postNewPassword);


module.exports = router