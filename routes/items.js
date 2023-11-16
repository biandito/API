const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemControllers');

// Adição de novos itens
router.post('/add', itemController.addItem);
exports.addItem = async (req, res) => {
    try {
      const { titulo, autor, categoria, preco, descricao, isbn, status, vendedor } = req.body;
  
      const newItem = new Item({
        titulo,
        autor,
        categoria,
        preco,
        descricao,
        isbn,
        status,
        vendedor,
      });
  
      await newItem.save();
  
      res.status(201).json({ message: 'Produto adicionado com sucesso.' });
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  };
  

// Listagem de itens
router.get('/', itemController.listItems);
exports.listItems = async (req, res) => {
    try {
      const items = await Item.find();
      res.status(200).json(items);
    } catch (error) {
      console.error('Erro ao listar itens:', error);
      res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  };
  

// Edição de itens
router.put('/:id', itemController.editItem);
exports.editItem = async (req, res) => {
    try {
      const itemId = req.params.id;
      const { titulo, autor, categoria, preco, descricao, isbn, status, vendedor } = req.body;
  
      // Encontre o item pelo ID
      const item = await Item.findById(itemId);
      if (!item) {
        return res.status(404).json({ message: 'Item não encontrado.' });
      }
  
      // Atualize os campos do item com os novos valores
      item.titulo = titulo;
      item.autor = autor;
      item.categoria = categoria;
      item.preco = preco;
      item.descricao = descricao;
      item.isbn = isbn;
      item.status = status;
      item.vendedor = vendedor;
  
      // Salve as alterações no banco de dados
      await item.save();
  
      res.status(200).json({ message: 'O item foi editado.' });
    } catch (error) {
      console.error('Erro ao editar item:', error);
      res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  };
  

// Busca básica de itens
router.get('/search', itemController.searchItems);
exports.searchItems = async (req, res) => {
    try {
      const { titulo } = req.query;
      const items = await Item.find({ titulo });
      res.status(200).json(items);
    } catch (error) {
      console.error('Erro ao buscar itens:', error);
      res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  };
  

module.exports = router;

