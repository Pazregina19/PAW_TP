const Dieta = require('../models/Dieta');

exports.listarPorPaciente = async (req, res) => {
  const dietas = await Dieta.find({ pacienteId: req.params.pacienteId });
  res.json(dietas);
};

exports.criar = async (req, res) => {
  const nova = new Dieta(req.body);
  await nova.save();
  res.status(201).json(nova);
};

exports.atualizar = async (req, res) => {
  const atualizada = await Dieta.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(atualizada);
};

exports.remover = async (req, res) => {
  await Dieta.findByIdAndDelete(req.params.id);
  res.json({ message: 'Dieta removida com sucesso.' });
};