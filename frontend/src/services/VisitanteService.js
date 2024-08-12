import axios from 'axios';

const API_URL = 'http://localhost:5000/visitantes';

export const getVisitantes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar visitantes: ' + error.message);
  }
};

export const createVisitante = async (visitante) => {
  try {
    const response = await axios.post(API_URL, visitante);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar visitante: ' + error.message);
  }
};

export const getVisitanteById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar visitante: ' + error.message);
  }
};

export const updateVisitanteById = async (id, visitante) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, visitante);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar visitante: ' + error.message);
  }
};

export const deleteVisitanteById = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Erro ao deletar visitante: ' + error.message);
  }
};