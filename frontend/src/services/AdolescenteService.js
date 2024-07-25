import api from '../api';

export const getAllAdolescentes = async () => {
  const response = await api.get('/adolescentes');
  return response.data;
};

export const createAdolescente = async (data) => {
  const response = await api.post('/adolescentes', data);
  return response.data;
};