import express from 'express';
import bodyParser from 'body-parser';

// criaçao api //
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

//homepage teste //
app.get('/', (req, res) => { 
    console.log('TEST'); 
    res.send('Hello');
});

app.listen(PORT, () => console.log(`Servidor No PORT: http://localhost:${PORT}`));
