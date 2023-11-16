const express = require('express');
const router = express.Router();
const categoriaControllers = require('../controllers/categoriaControllers');
const Categoria = require('../models/categoria'); 
// Listar todas as categorias

router.get('/', async (req, res) => {
    try {
         const categorias = await Categoria.find({}, 'nome descricao');
         res.status(200).json(categorias);
    } catch (error) {
         res.status(500).json({ error: error.message });
    }
});
exports.listCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find({}, 'nome descricao');
        res.status(200).json(categorias);
    } catch (error) {
        console.error('Erro ao listar categorias:', error);
        res.status(500).json({ error: error.message });
    }
  };
  
// Adicionar 
router.post('/add', categoriaControllers.addCategoria);

// Editar 
router.put('/:id', categoriaControllers.editCategoria);

// Excluir
router.delete('/:id', categoriaControllers.deleteCategoria);

module.exports = router;
