import React, { useState, useEffect } from 'react';
import { getEventos, createEvento } from '../services/EventoService';

const EventoPage = () => {
  const [eventos, setEventos] = useState([]);
  const [nome, setNome] = useState('');
  const [date, setData] = useState('');
  const [totalPessoas, setTotalPessoas] = useState(0);
  const [totalConvertidos, setTotalConvertidos] = useState(0);
  const [totalBatizados, setTotalBatizados] = useState(0);

  useEffect(() => {
    fetchEventos();
  }, []);

  const fetchEventos = async () => {
    try {
      const data = await getEventos();
      setEventos(data);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  };

  const handleAddEvento = async () => {
    try {
      const evento = {
        nome,
        date,
        totalPessoas,
        totalConvertidos,
        totalBatizados,
      };
      const data = await createEvento(evento);
      setEventos([...eventos, data]);
      setNome('');
      setData('');
      setTotalPessoas(0);
      setTotalConvertidos(0);
      setTotalBatizados(0);
    } catch (error) {
      console.error('Erro ao adicionar evento:', error);
    }
  };

  return (
    <div>
      <h1>Eventos</h1>
      <div>
        <h2>Adicionar Evento</h2>
        <input
          type="text"
          placeholder="Nome do Evento"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data"
          value={date}
          onChange={(e) => setData(e.target.value)}
        />
        <input
          type="number"
          placeholder="Total de Pessoas"
          value={totalPessoas}
          onChange={(e) => setTotalPessoas(e.target.value)}
        />
        <input
          type="number"
          placeholder="Total Convertidos"
          value={totalConvertidos}
          onChange={(e) => setTotalConvertidos(e.target.value)}
        />
        <input
          type="number"
          placeholder="Total Batizados"
          value={totalBatizados}
          onChange={(e) => setTotalBatizados(e.target.value)}
        />
        <button onClick={handleAddEvento}>Adicionar</button>
      </div>
      <h2>Lista de Eventos</h2>
      <ul>
        {eventos.map((evento) => (
          <li key={evento._id}>
            {evento.nome} - {evento.data} - Total de Pessoas: {evento.totalPessoas} - Convertidos: {evento.totalConvertidos} - Batizados: {evento.totalBatizados}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventoPage;