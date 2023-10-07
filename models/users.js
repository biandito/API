const mongoose = require('mongoose');

const Users = mongoose.model('Users', {
  nome: String,
  email: String,
  senha: String,
  userstatus: Boolean,
  tipo: String,
})

module.exports = Users