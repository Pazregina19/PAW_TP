const Mensagem = require('../models/Mensagem');

exports.listarPorUser = async (req, res) => {
  const msgs = await Mensagem.find({
    $or: [
      { remetenteId: req.params.userId },
      { destinatarioId: req.params.userId }
    ]
  }).sort('-timestamp');
  res.json(msgs);
};

exports.enviar = async (req, res) => {
  const nova = new Mensagem(req.body);
  await nova.save();
  res.status(201).json(nova);
};