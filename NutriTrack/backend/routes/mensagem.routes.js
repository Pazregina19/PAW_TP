var express = require('express');
var router = express.Router();
var mensagemController = require('../controllers/mensagem.controller');
var auth = require('../middleware/auth');

router.get('/:userId', auth.verifyToken, mensagemController.listarPorUser);
router.post('/', auth.verifyToken, mensagemController.enviar);

module.exports = router;