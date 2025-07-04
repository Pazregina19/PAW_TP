var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller');
var auth = require('../middleware/uploadMiddleware');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/me', auth.verifyToken, userController.getProfile);

module.exports = router;
