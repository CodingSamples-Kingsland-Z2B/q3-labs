const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.origami.get);

router.post('/', auth(), controllers.origami.post);

router.put('/:id', auth(), controllers.origami.put);

router.delete('/:id', auth(), controllers.origami.delete);

module.exports = router;