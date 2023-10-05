import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['comprador', 'vendedor', 'administrador'],
    required: true,
  },
  status: {
    type: String,
    enum: ['ativo', 'inativo'],
    default: 'ativo',
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
