const express = require('express')
const route = express.Router();
const cubeCtrl = require('../controllers/cubeCtrl')
const {isAuth }= require('../middlewares/isAuth')


route.get('/', cubeCtrl.getHome)
route.get('/about', cubeCtrl.getAbout)
route.get('/create', isAuth, cubeCtrl.getCreate)
route.post('/create', isAuth, cubeCtrl.postCreate)
route.get('/details/:cubeId', cubeCtrl.getDetails)
route.get('/export',cubeCtrl.getExport)


module.exports = route