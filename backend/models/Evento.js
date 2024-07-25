const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
  data: {
    type: Date,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  conversoes: {
    type: Number,
    default: 0,
  },
  batismos: {
    type: Number,
    default: 0,
  }
}, { timestamps: true });

const Evento = mongoose.model('Evento', EventoSchema);

module.exports = Evento;
