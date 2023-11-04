const mongoose = require('mongoose');

const Item = mongoose.model('Item', {
  titulo: String,
  autor: String,
  categoria: String,
  preco: Number,
  descricao: String,
  status: String,
  vendedor: String
  
});


module.exports = Item;
