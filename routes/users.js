import express from 'express';

const router = express.Router();

const users = [{
     id: "01" ,
     nome: "Nome",
     email: "email@email.com",
     senha: "senha",
     userstatus:"ativo",
     tipo:"tipo",}
]

//get//

router.get('/', (req, res) => {
     console.log(users);
     res.send(users);
    });

//post//

    router.post('/', (req, res) => {
  
     });
    export default router;