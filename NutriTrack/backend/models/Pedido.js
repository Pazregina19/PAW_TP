const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  pacienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
  novoNutricionistaId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  estado: { type: String, enum: ['pendente', 'aprovado', 'rejeitado'], default: 'pendente' },
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PedidoMudanca', pedidoSchema);
