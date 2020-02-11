const express = require("express");

const server = express();
server.use(express.json());

// Query params = ?teste=1
server.get("/query", (request, response) => {
  const queryTeste = request.query.nome;
  return response.json({ message: `Olá ${queryTeste}` });
});

// Route params = /users/1
server.get("/route/:id", (request, response) => {
  const routeTest = request.params.id;
  return response.json({ message: `Rota: ${routeTest}` });
});

// Request body = { "name": "Samir", "email": "svaf2@cin.ufpe.br" }
const users = [];

server.post("/users", (request, response) => {
  const { name, email } = request.body;
  users.push({ name: name, email: email });
  return response.json(users);
});
