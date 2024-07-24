const express = require('express');
const connectToDatabase = require('./config/database'); // Ajuste o caminho conforme necessário

const app = express();

// Conectar ao MongoDB
connectToDatabase();

// Configurações e rotas do Express
app.use(express.json());

// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
