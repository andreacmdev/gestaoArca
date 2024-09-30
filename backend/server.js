const express = require('express');
const app = express();
const connectToDatabase = require('./config/database');
const adolescenteRoutes = require('./routes/Adolescentes');
const visitanteRoutes = require('./routes/Visitantes');
const eventoRoutes = require('./routes/Eventos');
const conectadosRoutes = require('./routes/conectadosRoutes');

const cors = require('cors');
app.use(cors());

app.use(express.json());

connectToDatabase();

app.use('/adolescentes', adolescenteRoutes);
app.use('/visitantes', visitanteRoutes);
app.use('/eventos', eventoRoutes);
app.use('/conectados', conectadosRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});