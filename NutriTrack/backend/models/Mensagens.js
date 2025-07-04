const mongoose = require('mongoose');

const mensagemSchema = new mongoose.Schema({
  remetenteId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  destinatarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  conteudo: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Mensagem', mensagemSchema);