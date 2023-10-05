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
router.get('/', (req, res) => {
     console.log(users);
     res.send(users);
    });

    router.post('/', (req, res) => {
       
     });
    export default router;