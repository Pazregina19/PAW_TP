const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  nutricionistaId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  historicoDietas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dieta' }]
});

module.exports = mongoose.model('Paciente', pacienteSchema);

