const express = require('express');
const acessoryCtrl = require('../controllers/accessoryCtrl');
const {isAuth }= require('../middlewares/isAuth')
const router= express.Router();


router.get('/attach/accessory/:cubeId', isAuth, acessoryCtrl.getAttach);
router.post('/attach/accessory/:cubeId',isAuth, acessoryCtrl.postAttach);
router.get('/create/accessory',isAuth, acessoryCtrl.getCreate);
router.post('/create/accessory',isAuth, acessoryCtrl.postCreate);


module.exports =router;