const Categoria = require('../models/categoria');

// Lista

// Adicionar uma nova categoria
exports.addCategoria = async (req, res) => {
  try {
    const { nome, descricao } = req.body;

    if (!nome || !descricao) {
      return res.status(422).json({ message: 'Campos obrigatórios.' });
    }

    const novaCategoria = new Categoria({
      nome,
      descricao,
    });

    await novaCategoria.save();

    res.status(201).json({ message: 'Categoria adicionada com sucesso.' });
  } catch (error) {
    console.error('Erro ao adicionar categoria:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

// Editar
exports.editCategoria = async (req, res) => {
  try {
    const categoriaId = req.params.id;
    const { nome, descricao } = req.body;

    // Encontre a categoria pelo ID
    const categoria = await Categoria.findById(categoriaId);
    if (!categoria) {
      return res.status(404).json({ message: 'Categoria não encontrada.' });
    }

    categoria.nome = nome;
    categoria.descricao = descricao;

    await categoria.save();

    res.status(200).json({ message: 'Categoria editada.' });
  } catch (error) {
    console.error('Erro ao editar categoria:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

// Excluir
exports.deleteCategoria = async (req, res) => {
  try {
    const categoriaId = req.params.id;

    // Remover por ID
    await Categoria.findByIdAndDelete(categoriaId);

    res.status(200).json({ message: 'Categoria excluída com sucesso.' });
  } catch (error) {
    console.error('Erro ao excluir categoria:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};
