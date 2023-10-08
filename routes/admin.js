const express = require('express');
const router = express.Router();

// login 
// {"email":"email",
// "senha":"senha"}
router.post('/login', async (req, res) => {

    const {email,senha} = req.body
    if (!email || !senha) {
         res.status(422).json({error:'Campo obrigatório'})
    } else {
         res.status(200).json({message:'Login efetuado'})
         return
    }
})
router.get('/reports', async (req, res) => {
});



module.exports = router;
