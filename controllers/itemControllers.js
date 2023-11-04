const Item = require('../models/items');

exports.addItem = async (req, res) => {
  try {
    const { id, titulo, autor, categoria, preco, descricao, status,vendedor } = req.body;

    // Novo produto
    const newItem = new Item({
      id,
      titulo,
      autor,
      categoria,
      preco,
      descricao,
      status,
      vendedor
    });

    await newItem.save();

    res.status(201).json({ message: 'Produto adicionado.' });
  } catch (error) {
    console.error('Erro no servidor', error);
    res.status(500).json({ message: 'Erro no servidor.' });
  }
};

exports.listItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    console.error('Não foi possível listar', error);
    res.status(500).json({ message: 'Erro no servidor.' });
  }
};

exports.editItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const { titulo, autor, categoria, preco, descricao } = req.body;

    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item não encontrado.' });
    }

    item.titulo = titulo;
    item.autor = autor;
    item.categoria = categoria;
    item.preco = preco;
    item.descricao = descricao;

    await item.save();

    res.status(200).json({ message: 'O item foi editado.' });
  } catch (error) {
    console.error('Erro ao editar item:', error);
    res.status(500).json({ message: 'Erro no servidor.' });
  }
};

exports.searchItems = async (req, res) => {
  const { query } = req.query;
  try {
    const items = await Item.find({ $text: { $search: query } });
    res.status(200).json(items);
  } catch (error) {
    console.error('Erro ao buscar itens', error);
    res.status(500).json({ message: 'Erro no servidor.' });
  }
};
