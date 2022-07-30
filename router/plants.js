const express = require('express');
const router = express.Router();
const plantController = require('../controller/plantController');

router.get('/', plantController.list);
router.post('/', plantController.insert);
router.get('/create', plantController.create);
router.get('/:id/edit', plantController.edit);
router.post('/:id/edit', plantController.update);
router.get('/:id/delete', plantController.delete);
router.get('/:id', plantController.show);

module.exports = router;