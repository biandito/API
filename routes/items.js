const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemControllers');

// adicionar
router.post('/add', itemController.addItem);

// listar
router.get('/', itemController.listItems);

// editar
router.put('/:id', itemController.editItem);

// buscar
router.get('/search', itemController.searchItems);

module.exports = router;
