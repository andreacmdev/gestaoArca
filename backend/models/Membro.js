const mongoose = require('mongoose');

const MembroSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  presente: { type: Boolean, default: false }
});

module.exports = mongoose.model('Membro', MembroSchema);
