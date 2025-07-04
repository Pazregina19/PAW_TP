var express = require('express');
var router = express.Router();
var registoController = require('../controllers/registo.controller');
var auth = require('../middleware/auth');

router.get('/:pacienteId', auth.verifyToken, registoController.listarPorPaciente);
router.post('/', auth.verifyToken, registoController.registar);

module.exports = router;