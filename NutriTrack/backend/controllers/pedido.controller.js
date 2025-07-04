const Pedido = require('../models/Pedido');

exports.listar = async (req, res) => {
  const pedidos = await Pedido.find().populate('pacienteId novoNutricionistaId');
  res.json(pedidos);
};

exports.criar = async (req, res) => {
  const novo = new Pedido(req.body);
  await novo.save();
  res.status(201).json(novo);
};

exports.aprovar = async (req, res) => {
  const atualizado = await Pedido.findByIdAndUpdate(req.params.id, { estado: 'aprovado' }, { new: true });
  res.json(atualizado);
};

exports.rejeitar = async (req, res) => {
  const atualizado = await Pedido.findByIdAndUpdate(req.params.id, { estado: 'rejeitado' }, { new: true });
  res.json(atualizado);
};