import axios from 'axios';

const API_URL = 'http://localhost:5000/conectados'; // Assumindo que o backend está rodando na porta 5000

export const getGrupos = async () => {
  const response = await axios.get(`${API_URL}/grupos`);
  return response.data;
};

export const marcarPresenca = async (membroId) => {
  const response = await axios.post(`${API_URL}/marcar-presenca`, { membroId });
  return response.data;
};

export const adicionarMembro = async (novoMembro) => {
  const response = await axios.post(`${API_URL}/adicionar-membro`, novoMembro);
  return response.data;
};

// Função para adicionar um novo grupo
export const adicionarGrupo = async (grupo) => {
  const response = await axios.post(`${API_URL}/grupos`, grupo);
  return response.data;
};