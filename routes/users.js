const mongoose = require('mongoose');
const router = require('express').Router();

const Users = require('../models/users')

//cadastra usuario users/signup //
router.post('/signup', async (req, res) => {
  
const {nome,email,senha,userstatus,tipo } = req.body
if (!nome || !email || !senha) {
     res.status(422).json({error: 'Campo obrigatório'})
}

const users = {
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

// le dados //
router.get('/', async (req,res) => {
     try {
          const users = await Users.find()
          res.status(200).json(users)
     } catch (error) {
          res.status(500).json({error: error})

     }
// id do usuario unico mongodb//

router.get('/:id', async (req,res) => 
{ 
     const id= req.params.id
     try  {
          const users = await Users.findOne({_id: id})
          if  (!users) {
               res.status(422).json({message: 'Usuário não cadastrado'})
          }
          res.status(200).json(users)
     } catch (error) {
          res.status(500).json({error: error})

     } 
 })

})
module.exports = router