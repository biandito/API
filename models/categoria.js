const mongoose = require('mongoose');

const Categoria = mongoose.model('Categoria', {
  nome: String,
  descricao: String,
  ativo:Boolean
})

module.exports = Categoria ;