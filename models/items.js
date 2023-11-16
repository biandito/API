const mongoose = require('mongoose');
const Item = mongoose.model('Item', {
  id: Number,
  titulo: String,
  autor: String,
  categoria: String,
  preco: Number,
  descricao: String,
  isbn: Number,
  status: String,
  vendedor: String
  
});


module.exports = Item;
