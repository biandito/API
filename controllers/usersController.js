const User = require('../models/User'); 

exports.signup = async (req, res) => {
  try {
    const { nome, email, senha, tipo } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'E-mail já está em uso.' });
    }

    const newUser = new User({
      nome,
      email,
      senha, 
      tipo,
    });

    await newUser.save();

    res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

