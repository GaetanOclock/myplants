const express = require('express');
const router = express.Router();
const speciesController = require('../controller/speciesController');

router.get('/', speciesController.list);
router.post('/', speciesController.insert);
router.get('/create', speciesController.create);
router.get('/:id/edit', speciesController.edit);
router.post('/:id/edit', speciesController.update);
router.get('/:id/delete', speciesController.delete);
router.get('/:id', speciesController.show);

module.exports = router;