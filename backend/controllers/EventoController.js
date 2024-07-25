const Evento = require('../models/Evento');

// Criar um novo evento
exports.create = async (req, res) => {
  try {
    const novoEvento = new Evento(req.body);
    const salvoEvento = await novoEvento.save();
    res.status(201).json(salvoEvento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obter todos os eventos
exports.getAll = async (req, res) => {
  try {
    const eventos = await Evento.find();
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter um evento por ID
exports.getById = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id);
    if (!evento) return res.status(404).json({ error: 'Evento não encontrado' });
    res.status(200).json(evento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um evento por ID
exports.updateById = async (req, res) => {
  try {
    const atualizadoEvento = await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizadoEvento) return res.status(404).json({ error: 'Evento não encontrado' });
    res.status(200).json(atualizadoEvento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar um evento por ID
exports.deleteById = async (req, res) => {
  try {
    const deletadoEvento = await Evento.findByIdAndDelete(req.params.id);
    if (!deletadoEvento) return res.status(404).json({ error: 'Evento não encontrado' });
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
