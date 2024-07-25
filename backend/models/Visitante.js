const mongoose = require('mongoose');

const VisitanteSchema = new mongoose.Schema({
  nomeCompleto: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Visitante = mongoose.model('Visitante', VisitanteSchema);

module.exports = Visitante;
