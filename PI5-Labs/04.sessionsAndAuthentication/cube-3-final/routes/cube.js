const express = require('express')
const router = express.Router();
const cubeCtrl = require('../controllers/cubeCtrl')
const {isAuth }= require('../middlewares/isAuth')


router.get('/', cubeCtrl.getHome)
router.get('/about', cubeCtrl.getAbout)
router.get('/create', isAuth, cubeCtrl.getCreate)
router.post('/create', isAuth, cubeCtrl.postCreate)
router.get('/details/:cubeId', cubeCtrl.getDetails)
router.get('/export',cubeCtrl.getExport)
router.get('/edit/:cubeId', isAuth, cubeCtrl.getEdit)
router.post('/edit/:cubeId', isAuth, cubeCtrl.postEdit)
router.get('/delete/:cubeId', isAuth, cubeCtrl.getDelete)
router.post('/delete/:cubeId', isAuth, cubeCtrl.postDelete)


module.exports = router