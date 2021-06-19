const express = require('express');
const acessoryCtrl = require('../controllers/accessoryCtrl');
const router= express.Router();


router.get('/attach/accessory/:cubeId',acessoryCtrl.getAttach);
router.post('/attach/accessory/:cubeId',acessoryCtrl.postAttach);
router.get('/create/accessory',acessoryCtrl.getCreate);
router.post('/create/accessory',acessoryCtrl.postCreate);


module.exports =router;