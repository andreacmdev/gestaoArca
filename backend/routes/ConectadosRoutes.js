const express = require('express');
const router = express.Router();
const ConectadosController = require('../controllers/ConectadosController');

router.get('/grupos', ConectadosController.getGrupos);
router.post('/marcar-presenca', ConectadosController.marcarPresenca);
router.post('/adicionar-membro', ConectadosController.adicionarMembro);

module.exports = router;