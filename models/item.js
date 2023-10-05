import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: String,
  categoria: String,
  preco: Number,
  descricao: String,
  status: {
    type: String,
    enum: ['ativo', 'inativo'],
    default: 'ativo',
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
