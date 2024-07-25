import React, { useEffect, useState } from 'react';
import { getAllAdolescentes } from '../services/AdolescenteService';

function AdolescentePage() {
  const [adolescentes, setAdolescentes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllAdolescentes();
        setAdolescentes(data);
      } catch (error) {
        console.error('Erro ao buscar adolescentes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Gestão de Adolescentes</h2>
      <ul>
        {adolescentes.map((adolescente) => (
          <li key={adolescente.id}>{adolescente.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdolescentePage;
