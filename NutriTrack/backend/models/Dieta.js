const mongoose = require('mongoose');

const refeicaoSchema = new mongoose.Schema({
  diaSemana: { type: String, required: true }, // 'segunda', 'terça', etc.
  tipo: { type: String, required: true }, // 'pequeno-almoço', 'almoço', etc.
  descricao: String,
  calorias: Number
});

const dietaSchema = new mongoose.Schema({
  pacienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
  dataInicio: { type: Date, required: true },
  refeicoes: [refeicaoSchema]
});

module.exports = mongoose.model('Dieta', dietaSchema);
