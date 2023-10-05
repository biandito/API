import express from 'express';
import bodyParser from 'body-parser';

// import usuarios //
import usuariosRoutes from './routes/users.js';

// criaçao api //
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usuariosRoutes);

//homepage teste //
app.get('/', (req, res) => { 
    console.log('TEST'); 
    res.send('Hello');
});

app.listen(PORT, () => console.log(`Servidor No PORT: http://localhost:${PORT}`));
