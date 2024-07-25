const express = require('express');
const router = express.Router();
const EventoController = require('../controllers/EventoController');

// Criar um novo evento
router.post('/', EventoController.create);

// Obter todos os eventos
router.get('/', EventoController.getAll);

// Obter um evento por ID
router.get('/:id', EventoController.getById);

// Atualizar um evento por ID
router.put('/:id', EventoController.updateById);

// Deletar um evento por ID
router.delete('/:id', EventoController.deleteById);

module.exports = router;
