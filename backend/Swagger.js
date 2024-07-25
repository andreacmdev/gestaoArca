const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Gestao Arca API',
      description: 'API para gestão de adolescentes e eventos',
      contact: {
        name: 'Dedev'
      },
      servers: ['http://localhost:5000']
    }
  },
  apis: ['../backend/routes/Adolescentes.js'] // Caminho para seus arquivos de rota/controle
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /adolescentes:
 *   post:
 *     summary: Cria um novo adolescente
 *     tags: [Adolescente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeCompleto:
 *                 type: string
 *                 description: Nome do adolescente
 *               telefone:
 *                 type: string
 *                 description: Telefone do adolescente
 *               departamento:
 *                 type: string
 *                 description: Departamento ao qual o adolescente pertence
 *     responses:
 *       201:
 *         description: Adolescente criado com sucesso
 *       400:
 *         description: Erro de validação ou dados inválidos
 */
