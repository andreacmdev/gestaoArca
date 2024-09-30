import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importar os componentes de página
import HomePage from './components/HomePage';
import AdolescentePage from './components/AdolescentePage';
import VisitantePage from './components/VisitantePage';
import EventoPage from './components/EventoPage';
import NavBar from './components/NavBar';
import ConectadosPage from './components/ConectadosPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main className="App-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/adolescentes" element={<AdolescentePage />} />
            <Route path="/visitantes" element={<VisitantePage />} />
            <Route path="/eventos" element={<EventoPage />} />
            {<Route path="/conectados" component={ConectadosPage} />
          }
          </Routes>
        </main>
        <footer className="App-footer">
          <p>© 2024 Gestão Arca. Todos os direitos reservados a Dedev.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
