const Registo = require('../models/Registo');

exports.listarPorPaciente = async (req, res) => {
  const lista = await Registo.find({ pacienteId: req.params.pacienteId });
  res.json(lista);
};

exports.registar = async (req, res) => {
  const novo = new Registo(req.body);
  await novo.save();
  res.status(201).json(novo);
};