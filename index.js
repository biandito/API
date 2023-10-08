const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// middlewares //
app.use(express.urlencoded({extended: true,})),
app.use(express.json())

// criaçao porta //

const PORT = 5000;

//homepage //
app.get('/', (req, res) => { 
    res.status(200).json({mensagem: 'Home Page'});
});

// endpoints API //

//usuarios //
const users = require('./routes/users')
app.use('/users', users)

//administradores//
const admin = require('./routes/admin');
app.use('/admin', admin);

// porta teste //
// app.listen(PORT, () => console.log(`Servidor No PORT: http://localhost:${PORT}`));

// mongodb //
mongoose.
connect('mongodb+srv://biandito:g0xYKCzIsX7N8fsY@cluster0.1nmalzc.mongodb.net/?retryWrites=true&w=majority')
.then (() => { 
    app.listen(5000)
    console.log('Conexão realizada com sucesso')
 })
 .catch((erro) => console.log(erro))

