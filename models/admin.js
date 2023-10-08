const mongoose = require('mongoose');

const Admins = mongoose.model('Admins', {
  nome: String,
  email: String,
  senha: String,
})

module.exports = Admins