var express = require('express');
var router = express.Router();
var dietaController = require('../controllers/dieta.controller');
var auth = require('../middleware/auth');

router.get('/:pacienteId', auth.verifyToken, dietaController.listarPorPaciente);
router.post('/', auth.verifyToken, dietaController.criar);
router.put('/:id', auth.verifyToken, dietaController.atualizar);
router.delete('/:id', auth.verifyToken, dietaController.remover);

module.exports = router;