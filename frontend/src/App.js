// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Importar os componentes de página
import HomePage from './components/HomePage';
import AdolescentePage from './components/AdolescentePage';
import VisitantePage from './components/VisitantePage';
import EventoPage from './components/EventoPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Gestão Arca</h1>
        </header>
        <main className="App-content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/adolescentes" component={AdolescentePage} />
            <Route path="/visitantes" component={VisitantePage} />
            <Route path="/eventos" component={EventoPage} />
            {/* Adicionar mais rotas conforme necessário */}
          </Switch>
        </main>
        <footer className="App-footer">
          <p>© 2024 Gestão Arca. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

