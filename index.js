import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
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


// DB conexão//
mongoose.connect(
"mongodb+srv://biandito:pcxByU2JeIyjmVA8@cluster0.660p8xj.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp").then(
() => console.log("Bd conectado"))
.catch (() => console.log("Deu erro"))
