const Nutricionista = require('../models/Nutricionista');

exports.listar = async (req, res) => {
  const lista = await Nutricionista.find().populate('userId pacientes');
  res.json(lista);
};

exports.criar = async (req, res) => {
  const novo = new Nutricionista(req.body);
  await novo.save();
  res.status(201).json(novo);
};

exports.detalhar = async (req, res) => {
  const encontrado = await Nutricionista.findById(req.params.id).populate('userId pacientes');
  if (!encontrado) return res.status(404).json({ error: 'Nutricionista não encontrado.' });
  res.json(encontrado);
};

exports.atualizar = async (req, res) => {
  const atualizado = await Nutricionista.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(atualizado);
};
