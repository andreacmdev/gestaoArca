const express = require('express');
const router = express.Router();
const AdolescenteController = require('../controllers/AdolescenteController');

// Criar um novo adolescente
router.post('/', AdolescenteController.create);

// Obter todos os adolescentes
router.get('/', AdolescenteController.getAll);

// Obter um adolescente por ID
router.get('/:id', AdolescenteController.getById);

// Atualizar um adolescente por ID
router.put('/:id', AdolescenteController.updateById);

// Deletar um adolescente por ID
router.delete('/:id', AdolescenteController.deleteById);

module.exports = router;
