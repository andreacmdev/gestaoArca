import axios from 'axios';

const API_URL = 'http://localhost:5000/eventos';

export const getEventos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar eventos: ' + error.message);
  }
};

export const createEvento = async (evento) => {
  try {
    const response = await axios.post(API_URL, evento);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar evento: ' + error.message);
  }
};

export const getEventoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar evento: ' + error.message);
  }
};

export const updateEventoById = async (id, evento) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, evento);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar evento: ' + error.message);
  }
};

export const deleteEventoById = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Erro ao deletar evento: ' + error.message);
  }
};