const Adolescente = require('../models/Adolescente');

// Criar um novo adolescente
exports.create = async (req, res) => {
  try {
    const { nome, telefone, departamento } = req.body;

    // Valida os dados de entrada
    if (!nome || !telefone || !departamento) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    const novoAdolescente = new Adolescente({ nome, telefone, departamento });
    const salvoAdolescente = await novoAdolescente.save();
    res.status(201).json(salvoAdolescente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o Adolescente.' });
  }
};

// Obter todos os adolescentes
exports.getAll = async (req, res) => {
  try {
    const adolescentes = await Adolescente.find();
    res.status(200).json(adolescentes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter Adolescentes.' });
  }
};

// Obter um adolescente por ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const adolescente = await Adolescente.findById(id);

    if (!adolescente) {
      return res.status(404).json({ message: 'Adolescente não encontrado.' });
    }

    res.status(200).json(adolescente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter Adolescente.' });
  }
};

// Atualizar um adolescente por ID
exports.updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, telefone, departamento } = req.body;

    const atualizadoAdolescente = await Adolescente.findByIdAndUpdate(
      id,
      { nome, telefone, departamento },
      { new: true }
    );

    if (!atualizadoAdolescente) {
      return res.status(404).json({ message: 'Adolescente não encontrado.' });
    }

    res.status(200).json(atualizadoAdolescente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar Adolescente.' });
  }
};

// Deletar um adolescente por ID
exports.deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletadoAdolescente = await Adolescente.findByIdAndDelete(id);

    if (!deletadoAdolescente) {
      return res.status(404).json({ message: 'Adolescente não encontrado.' });
    }

    res.status(204).json({ message: 'Adolescente deletado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar Adolescente.' });
  }
};
