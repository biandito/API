const Item = require('../models/item'); // Importe o modelo de Produto

// Função para adicionar um novo produto
exports.addItem = async (req, res) => {
  try {
    const { titulo, autor, categoria, preco, descricao } = req.body;

    // Crie um novo produto
    const newItem = new Item({
      titulo,
      autor,
      categoria,
      preco,
      descricao,
    });

    await newItem.save();

    res.status(201).json({ message: 'Produto adicionado com sucesso.' });
  } catch (error) {
    console.error('Erro ao adicionar produto:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

// Outras funções controladoras relacionadas aos produtos podem ser adicionadas aqui
