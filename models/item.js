import mongoose from "mongoose";

const Item = mongoose.model('Item', {
  titulo: String,
  autor: String,
  categoria: String,
  preco: Number,
  descricao: String,
  status: Boolean,
  
});


module.exports = Item;
