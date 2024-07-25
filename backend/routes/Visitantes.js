const express = require('express');
const router = express.Router();
const VisitanteController = require('../controllers/VisitanteController');

// Criar um novo visitante
router.post('/', VisitanteController.create);

// Obter todos os visitantes
router.get('/', VisitanteController.getAll);

// Obter um visitante por ID
router.get('/:id', VisitanteController.getById);

// Atualizar um visitante por ID
router.put('/:id', VisitanteController.updateById);

// Deletar um visitante por ID
router.delete('/:id', VisitanteController.deleteById);

module.exports = router;
