const express = require('express');
const router = express.Router();
const speciesController = require('../controller/speciesController');

router.get('/', speciesController.list);
router.post('/', speciesController.insert);
router.get('/create', speciesController.create);

module.exports = router;