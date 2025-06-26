const mongoose = require('mongoose');

const nutricionistaSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  pacientes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' }]
});

module.exports = mongoose.model('Nutricionista', nutricionistaSchema);
