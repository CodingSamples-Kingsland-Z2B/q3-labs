const express = require('express')
const route = express.Router();
const cubeCtrl = require('../controllers/cubeCtrl')


route.get('/', cubeCtrl.getHome)
route.get('/about', cubeCtrl.getAbout)
route.get('/create', cubeCtrl.getCreate)


module.exports = route