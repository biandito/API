const express = require('express');
const router = express.Router();
const categoriaControllers = require('../controllers/categoriaControllers');

// Listar todas as categorias
router.get('/', categoriaControllers.listCategorias);

// Adicionar 
router.post('/add', categoriaControllers.addCategoria);

// Editar 
router.put('/:id', categoriaControllers.editCategoria);

// Excluir
router.delete('/:id', categoriaControllers.deleteCategoria);

module.exports = router;
