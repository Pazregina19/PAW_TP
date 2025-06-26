const Paciente = require('../models/Paciente');

exports.listar = async (req, res) => {
  const pacientes = await Paciente.find().populate('userId nutricionistaId');
  res.json(pacientes);
};

exports.criar = async (req, res) => {
  const novo = new Paciente(req.body);
  await novo.save();
  res.status(201).json(novo);
};

exports.detalhar = async (req, res) => {
  const paciente = await Paciente.findById(req.params.id).populate('userId nutricionistaId');
  if (!paciente) return res.status(404).json({ error: 'Paciente não encontrado.' });
  res.json(paciente);
};

exports.atualizar = async (req, res) => {
  const atualizado = await Paciente.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(atualizado);
};