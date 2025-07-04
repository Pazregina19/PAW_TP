const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
    const token = jwt.sign({ id: user._id, tipo: user.tipo }, process.env.JWT_SECRET, { expiresIn: '2h' });
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.register = async (req, res) => {
  try {
    const { nome, email, password, tipo } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email já existe' });
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({ nome, email, passwordHash, tipo });
    await newUser.save();
    res.status(201).json({ message: 'Conta criada com sucesso', user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};