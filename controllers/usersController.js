const User = require('../models/User'); // Importe o modelo de Usuário

// Função para cadastrar um novo usuário
exports.signup = async (req, res) => {
  try {
    const { nome, email, senha, tipo } = req.body;

    // Verifique se o e-mail já está em uso
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'E-mail já está em uso.' });
    }

    // Crie um novo usuário
    const newUser = new User({
      nome,
      email,
      senha, // Lembre-se de criptografar a senha antes de salvar no banco de dados
      tipo,
    });

    await newUser.save();

    res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

// Outras funções controladoras relacionadas aos usuários podem ser adicionadas aqui
