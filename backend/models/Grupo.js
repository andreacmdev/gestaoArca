const mongoose = require('mongoose');

const GrupoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cor: { type: String, required: true },
  membros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Membro' }]
});

module.exports = mongoose.model('Grupo', GrupoSchema);
