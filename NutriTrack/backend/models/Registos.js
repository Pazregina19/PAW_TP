const mongoose = require('mongoose');

const cumprimentoSchema = new mongoose.Schema({
  pacienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
  data: { type: Date, required: true },
  refeicao: { type: String, required: true },
  cumpriu: { type: Boolean, required: true },
  justificacao: String,
  imagemUrl: String
});

module.exports = mongoose.model('Registos', registosSchema);
