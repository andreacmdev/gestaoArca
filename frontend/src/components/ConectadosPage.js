import React, { useState, useEffect } from 'react';
import { getGrupos, marcarPresenca, adicionarMembro, adicionarGrupo } from '../services/ConectadosService'; // Ajuste nos serviços
import '../styles/ConectadosPage.css';

const ConectadosPage = () => {
  const [grupos, setGrupos] = useState([]);
  const [novoMembro, setNovoMembro] = useState({ nome: '', grupoId: '' });
  const [novoGrupo, setNovoGrupo] = useState({ nome: '', cor: '' }); // Para adicionar novo grupo

  useEffect(() => {
    fetchGrupos();
  }, []);

  const fetchGrupos = async () => {
    try {
      const gruposData = await getGrupos();
      setGrupos(gruposData);
    } catch (error) {
      console.error('Erro ao buscar grupos:', error);
    }
  };

  const handleMarcarPresenca = async (membroId) => {
    try {
      await marcarPresenca(membroId);
      fetchGrupos(); // Atualiza a lista
    } catch (error) {
      console.error('Erro ao marcar presença:', error);
    }
  };

  const handleAdicionarMembro = async () => {
    try {
      await adicionarMembro(novoMembro);
      fetchGrupos(); // Atualiza a lista
      setNovoMembro({ nome: '', grupoId: '' });
    } catch (error) {
      console.error('Erro ao adicionar membro:', error);
    }
  };

  const handleAdicionarGrupo = async () => {
    try {
      await adicionarGrupo(novoGrupo);
      fetchGrupos(); // Atualiza a lista
      setNovoGrupo({ nome: '', cor: '' });
    } catch (error) {
      console.error('Erro ao adicionar grupo:', error);
    }
  };

  return (
    <div className="conectados-page">
      <h1>Conectados - Discipulado</h1>

      <div className="conectados-buttons">
        <button onClick={() => console.log('Registrar Presença')}>Registrar Presença</button>
        <button onClick={() => console.log('Adicionar Novo Membro')}>Adicionar Novo Membro</button>
        <button onClick={() => console.log('Adicionar Novo Grupo')}>Adicionar Novo Grupo</button>
      </div>

      {grupos.map(grupo => (
        <div key={grupo.id} className="grupo" style={{ backgroundColor: grupo.cor }}>
          <h2>{grupo.nome}</h2>
          <ul>
            {grupo.membros.map(membro => (
              <li key={membro.id}>
                {membro.nome} - Presente: {membro.presente ? 'Sim' : 'Não'}
                <button onClick={() => handleMarcarPresenca(membro.id)}>Marcar Presença</button>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Seção para adicionar novo membro */}
      <div className="adicionar-membro">
        <h3>Adicionar Novo Membro</h3>
        <input
          type="text"
          placeholder="Nome"
          value={novoMembro.nome}
          onChange={(e) => setNovoMembro({ ...novoMembro, nome: e.target.value })}
        />
        <select
          value={novoMembro.grupoId}
          onChange={(e) => setNovoMembro({ ...novoMembro, grupoId: e.target.value })}
        >
          <option value="">Selecione um Grupo</option>
          {grupos.map(grupo => (
            <option key={grupo.id} value={grupo.id}>{grupo.nome}</option>
          ))}
        </select>
        <button onClick={handleAdicionarMembro}>Adicionar Membro</button>
      </div>

      {/* Seção para adicionar novo grupo */}
      <div className="adicionar-grupo">
        <h3>Adicionar Novo Grupo</h3>
        <input
          type="text"
          placeholder="Nome do Grupo"
          value={novoGrupo.nome}
          onChange={(e) => setNovoGrupo({ ...novoGrupo, nome: e.target.value })}
        />
        <input
          type="color"
          value={novoGrupo.cor}
          onChange={(e) => setNovoGrupo({ ...novoGrupo, cor: e.target.value })}
        />
        <button onClick={handleAdicionarGrupo}>Adicionar Grupo</button>
      </div>
    </div>
  );
};

export default ConectadosPage;
