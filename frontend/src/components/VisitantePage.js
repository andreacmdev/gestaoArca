import React, { useState, useEffect } from 'react';
import { getVisitantes, createVisitante } from '../services/VisitanteService';

const VisitantePage = () => {
  const [visitantes, setVisitantes] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    fetchVisitantes();
  }, []);

  const fetchVisitantes = async () => {
    try {
      const data = await getVisitantes();
      setVisitantes(data);
    } catch (error) {
      console.error('Erro ao buscar visitantes:', error);
    }
  };

  const handleAddVisitante = async () => {
    try {
      const visitante = { nome, telefone };
      const data = await createVisitante(visitante);
      setVisitantes([...visitantes, data]);
      setNome('');
      setTelefone('');
    } catch (error) {
      console.error('Erro ao adicionar visitante:', error);
    }
  };

  return (
    <div>
      <h1>Visitantes</h1>
      <div>
        <h2>Adicionar Visitante</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <button onClick={handleAddVisitante}>Adicionar</button>
      </div>
      <h2>Lista de Visitantes</h2>
      <ul>
        {visitantes.map((visitante) => (
          <li key={visitante._id}>{visitante.nome} - {visitante.telefone}</li>
        ))}
      </ul>
    </div>
  );
};

export default VisitantePage;