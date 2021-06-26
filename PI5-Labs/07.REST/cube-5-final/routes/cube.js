const express = require('express')
const router = express.Router();
const cubeCtrl = require('../controllers/cubeCtrl')
const {isAuth }= require('../middlewares/isAuth')


router.get('/', cubeCtrl.home)                       //all cubes                 GET+ http://localhost:4500/api/cubes/
router.post('/', isAuth, cubeCtrl.create)           //Create a cube             POST+ http://localhost:4500/api/cubes/
router.get('/export',cubeCtrl.export)
router.get('/:cubeId', cubeCtrl.details)             //get specific cube data    GET +http://localhost:4500/api/cubes/1234566
router.put('/:cubeId', isAuth, cubeCtrl.edit)       //edit specific cube data   PUT +http://localhost:4500/api/cubes/1234566
router.delete('/:cubeId', isAuth, cubeCtrl.delete); //DELETE specific cube data DELETE +http://localhost:4500/api/cubes/1234566
router.get('/save/:cubeId', cubeCtrl.save)


module.exports = router