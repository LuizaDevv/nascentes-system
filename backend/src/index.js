const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Backend rodando!',
    timestamp: new Date(),
    ambiente: process.env.NODE_ENV
  });
});

// Rota simples: listar nascentes
app.get('/api/nascentes', (req, res) => {
  res.json({ 
    mensagem: 'Endpoint de nascentes - em construção',
    dados: []
  });
});

// Rota simples: criar nascente
app.post('/api/nascentes', (req, res) => {
  res.json({ 
    mensagem: 'Nascente recebida (não está sendo salva ainda)',
    recebido: req.body
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
  console.log(`✓ Acesse: http://localhost:${PORT}/api/health`);
});
