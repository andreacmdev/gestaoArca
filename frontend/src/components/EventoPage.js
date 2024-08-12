import React, { useState, useEffect } from 'react';
import { getEventos, createEvento } from '../services/EventoService';

const EventoPage = () => {
  const [eventos, setEventos] = useState([]);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState(''); // Novo estado para a descrição
  const [data, setData] = useState('');
  const [totalPessoas, setTotalPessoas] = useState(0);
  const [totalConvertidos, setTotalConvertidos] = useState(0);
  const [totalBatizados, setTotalBatizados] = useState(0);

  useEffect(() => {
    fetchEventos();
  }, []);

  const fetchEventos = async () => {
    try {
      const eventosData = await getEventos();
      setEventos(eventosData);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  };

  const handleAddEvento = async () => {
    try {
      const evento = {
        nome,
        descricao, // Incluindo o campo descricao
        data,
        totalPessoas,
        totalConvertidos,
        totalBatizados,
      };
      const eventoCriado = await createEvento(evento);
      setEventos([...eventos, eventoCriado]);
      setNome('');
      setDescricao(''); // Limpando o campo descricao após adicionar
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
          type="text"
          placeholder="Descrição do Evento" // Novo input para a descrição
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data"
          value={data}
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
            {evento.nome} - {evento.descricao} - {evento.data} - Total de Pessoas: {evento.totalPessoas} - Convertidos: {evento.totalConvertidos} - Batizados: {evento.totalBatizados}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventoPage;
