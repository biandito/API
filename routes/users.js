const mongoose = require('mongoose');
const router = require('express').Router();

const Users = require('../models/users')
router.post('/', async (req, res) => {
  
const { id,nome,email,senha,userstatus,tipo } = req.body
if (!nome || !email || !senha) {
     res.status(422).json({error: 'Campo obrigatório'})
}

const users = {
     id,
     nome,
     email,
     senha,
     userstatus,
     tipo,
}

try {
     await Users.create(users)
     res.status(201).json({message:'Usuário cadastrado.'})
}
catch (error) {
     res.status(500).json({error: error})
}

});
 
module.exports = router