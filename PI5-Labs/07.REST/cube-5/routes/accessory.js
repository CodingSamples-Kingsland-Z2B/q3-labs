const express = require('express');
const acessoryCtrl = require('../controllers/accessoryCtrl');
const {isAuth }= require('../middlewares/isAuth')
const router= express.Router();

router.post('/attach/accessory/:cubeId',isAuth, acessoryCtrl.attach);
router.post('/create/accessory',isAuth, acessoryCtrl.create);


module.exports =router;