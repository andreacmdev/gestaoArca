const Adolescente = require('../models/Adolescente');

// Criar um novo adolescente
exports.create = async (req, res) => {
  try {
    const novoAdolescente = new Adolescente(req.body);
    const salvoAdolescente = await novoAdolescente.save();
    res.status(201).json(salvoAdolescente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obter todos os adolescentes
exports.getAll = async (req, res) => {
  try {
    const adolescentes = await Adolescente.find();
    res.status(200).json(adolescentes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter um adolescente por ID
exports.getById = async (req, res) => {
  try {
    const adolescente = await Adolescente.findById(req.params.id);
    if (!adolescente) return res.status(404).json({ error: 'Adolescente não encontrado' });
    res.status(200).json(adolescente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um adolescente por ID
exports.updateById = async (req, res) => {
  try {
    const atualizadoAdolescente = await Adolescente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizadoAdolescente) return res.status(404).json({ error: 'Adolescente não encontrado' });
    res.status(200).json(atualizadoAdolescente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar um adolescente por ID
exports.deleteById = async (req, res) => {
  try {
    const deletadoAdolescente = await Adolescente.findByIdAndDelete(req.params.id);
    if (!deletadoAdolescente) return res.status(404).json({ error: 'Adolescente não encontrado' });
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
