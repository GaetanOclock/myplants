const express = require('express');
const router = express.Router();
const plantController = require('../controller/plantController');

router.get('/', plantController.list);
router.post('/', plantController.insert);
router.get('/create', plantController.create);

module.exports = router;