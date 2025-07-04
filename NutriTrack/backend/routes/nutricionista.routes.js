var express = require('express');
var router = express.Router();
var nutricionistaController = require('../controllers/nutricionista.controller');
var auth = require('../middleware/auth');

router.get('/', auth.verifyToken, nutricionistaController.listar);
router.post('/', auth.verifyToken, nutricionistaController.criar);
router.get('/:id', auth.verifyToken, nutricionistaController.detalhar);
router.put('/:id', auth.verifyToken, nutricionistaController.atualizar);

module.exports = router;