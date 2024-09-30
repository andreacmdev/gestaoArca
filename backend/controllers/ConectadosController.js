const Grupo = require('../models/Grupo');  // Assumindo que você tem um modelo Grupo
const Membro = require('../models/Membro'); // Assumindo que você tem um modelo Membro

const ConectadosController = {
  // Função para buscar todos os grupos e seus membros
  async getGrupos(req, res) {
    try {
      // Busca os grupos com os membros associados
      const grupos = await Grupo.find().populate('membros');
      res.status(200).json(grupos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar grupos' });
    }
  },

  // Função para marcar a presença de um membro
  async marcarPresenca(req, res) {
    const { membroId } = req.body;

    try {
      // Encontra o membro pelo ID
      const membro = await Membro.findById(membroId);

      if (!membro) {
        return res.status(404).json({ error: 'Membro não encontrado' });
      }

      // Altera o status de presença
      membro.presente = !membro.presente;
      await membro.save();

      res.status(200).json({ message: 'Presença marcada com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao marcar presença' });
    }
  },

  // Função para adicionar um novo membro a um grupo
  async adicionarMembro(req, res) {
    const { nome, grupoId } = req.body;

    try {
      // Encontra o grupo pelo ID
      const grupo = await Grupo.findById(grupoId);

      if (!grupo) {
        return res.status(404).json({ error: 'Grupo não encontrado' });
      }

      // Cria um novo membro e associa ao grupo
      const novoMembro = new Membro({ nome, presente: false });
      await novoMembro.save();

      // Adiciona o membro ao grupo
      grupo.membros.push(novoMembro);
      await grupo.save();

      res.status(201).json({ message: 'Membro adicionado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao adicionar membro' });
    }
  }
};

module.exports = ConectadosController;
