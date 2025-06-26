const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tipo: { type: String, enum: ['paciente', 'nutricionista', 'admin'], required: true },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);