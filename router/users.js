const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const secure = require('../middlewares/secure');

router.get('/connection', userController.connection);
router.post('/connection', userController.connectionAction);
router.get('/disconnect', userController.disconnect);
router.get('/register', userController.register);
router.post('/register', userController.registerAction);
router.get('/forgot-password', userController.forgotPassword);
router.post('/forgot-password', userController.forgotPasswordAction);
router.get('/dashboard', secure, userController.dashboard);

module.exports = router;