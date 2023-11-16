const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
});

const Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria;
