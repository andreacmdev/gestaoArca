const mongoose = require('mongoose');
require('dotenv').config();

const dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}?retryWrites=true&w=majority&appName=dbarca`;

async function connectToDatabase() {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao banco de dados MongoDB com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados MongoDB:', error);
    process.exit(1); // Encerra o processo em caso de erro
  }
}

module.exports = connectToDatabase;
