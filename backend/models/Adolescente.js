const mongoose = require('mongoose');

const AdolescenteSchema = new mongoose.Schema({
  nomeCompleto: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  departamento: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Adolescente = mongoose.model('Adolescente', AdolescenteSchema);

module.exports = Adolescente;