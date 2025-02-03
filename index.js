// Importa o módulo HTTP nativo do Node.js
const http = require('http');

// Define o hostname e a porta onde o servidor será executado
const hostname = '127.0.0.1';
const port = 3000;

// Cria o servidor e define o que será exibido na resposta
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Código de status HTTP 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Define o tipo de conteúdo como texto simples
  res.end('Olá Mundo\n'); // Envia a resposta "Olá Mundo"
});

// Faz o servidor escutar na porta especificada
server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});