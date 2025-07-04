var express = require('express');
var router = express.Router();
var pacienteController = require('../controllers/paciente.controller');
var auth = require('../middleware/auth');

router.get('/', auth.verifyToken, pacienteController.listar);
router.post('/', auth.verifyToken, pacienteController.criar);
router.get('/:id', auth.verifyToken, pacienteController.detalhar);
router.put('/:id', auth.verifyToken, pacienteController.atualizar);

module.exports = router;