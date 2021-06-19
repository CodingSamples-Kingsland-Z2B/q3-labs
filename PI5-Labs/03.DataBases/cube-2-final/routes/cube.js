const express = require('express')
const route = express.Router();
const cubeCtrl = require('../controllers/cubeCtrl')


route.get('/', cubeCtrl.getHome)
route.get('/about', cubeCtrl.getAbout)
route.get('/create', cubeCtrl.getCreate)
route.post('/create', cubeCtrl.postCreate)
route.get('/details/:cubeId', cubeCtrl.getDetails)
route.get('/export',cubeCtrl.getExport)


module.exports = route