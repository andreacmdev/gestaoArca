const Visitante = require('../models/Visitante');

// Criar um novo visitante
exports.create = async (req, res) => {
  try {
    const novoVisitante = new Visitante(req.body);
    const salvoVisitante = await novoVisitante.save();
    res.status(201).json(salvoVisitante);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obter todos os visitantes
exports.getAll = async (req, res) => {
  try {
    const visitantes = await Visitante.find();
    res.status(200).json(visitantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter um visitante por ID
exports.getById = async (req, res) => {
  try {
    const visitante = await Visitante.findById(req.params.id);
    if (!visitante) return res.status(404).json({ error: 'Visitante não encontrado' });
    res.status(200).json(visitante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um visitante por ID
exports.updateById = async (req, res) => {
  try {
    const atualizadoVisitante = await Visitante.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizadoVisitante) return res.status(404).json({ error: 'Visitante não encontrado' });
    res.status(200).json(atualizadoVisitante);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar um visitante por ID
exports.deleteById = async (req, res) => {
  try {
    const deletadoVisitante = await Visitante.findByIdAndDelete(req.params.id);
    if (!deletadoVisitante) return res.status(404).json({ error: 'Visitante não encontrado' });
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
