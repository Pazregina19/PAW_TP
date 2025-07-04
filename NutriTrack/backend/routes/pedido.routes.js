var express = require('express');
var router = express.Router();
var pedidoController = require('../controllers/pedido.controller');
var auth = require('../middleware/auth');

router.get('/', auth.verifyToken, auth.requireRole('admin'), pedidoController.listar);
router.post('/', auth.verifyToken, auth.requireRole('paciente'), pedidoController.criar);
router.patch('/:id/aprovar', auth.verifyToken, auth.requireRole('admin'), pedidoController.aprovar);
router.patch('/:id/rejeitar', auth.verifyToken, auth.requireRole('admin'), pedidoController.rejeitar);

module.exports = router;
