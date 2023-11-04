const mongoose = require('mongoose');
const router = require('express').Router();

const Users = require('../models/users')

// USERS //
// SIGN UP //
/**
 * /users/signup:
 *   post
 *   tags:
 *     - Usuário
 *     description: Cadastra um novo usuário no sistema.
 *      - application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               userstatus:
 *                 type: boolean
 *               tipo:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Usuário cadastrado com sucesso.
 *       '422':
 *         description: Campos obrigatórios não preenchidos.
 *       '500':
 *         description: Erro interno do servidor.
 */
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
     res.status(500).json({error:'error'})
}

});

/**
 * /users/login:
 *   post:
 *     summary: Efetua login de usuário.
 *     description: Realiza a autenticação do usuário no sistema.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Login efetuado com sucesso.
 *       '422':
 *         description: Campos obrigatórios não preenchidos.
 */

router.post('/login', async (req,res) => { 
     const {email,senha} = req.body
     if (!email || !senha) {
          res.status(422).json({error:'Campo obrigatório'})
     } else {
          res.status(200).json({message:'Login efetuado'})
     }
 })
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

/** soft delete
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Desativa um usuário.
 *     description: Desativa um usuário existente no sistema através do seu ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário a ser desativado.
 *     responses:
 *       '200':
 *         description: Usuário desativado com sucesso.
 *       '422':
 *         description: Usuário não existe.
 *       '500':
 *         description: Erro interno no servidor.
 */

   router.delete('/:id', async (req, res) => {
     const id = req.params.id;
   
     try {
       const user = await Users.findOne({ _id:userId});
   
       if (!user) {
         return res.status(422).json({ message:'Usuário não existe'});
       }
   
       user.userstatus = false;
   
       await user.save();
   
       res.status(200).json({ message: 'Usuário deletado' });
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   });
   


module.exports = router