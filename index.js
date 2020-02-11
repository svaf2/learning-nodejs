const express = require("express");

const server = express();
server.use(express.json());

const users = ["Samir", "Bárbara", "Pâmela"];

// Middlewares
function checkUserInArray(req, res, next) {
  const user = users[req.params.id];

  if (!user) {
    return res.status(400).json({ error: "User does not exists" });
  }

  req.user = user;
  return next();
}

function checkUserName(req, res, next) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "User name is required " });
  }

  return next();
}

// Listar todos os usuários
server.get("/users", (req, res) => {
  return res.json(users);
});

// Listar um usuário
server.get("/users/:id", checkUserInArray, (req, res) => {
  return res.json(req.user);
});

// Update de um usuário
server.put("/users/:id", checkUserName, checkUserInArray, (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  users[id] = name;
  return res.json(users);
});

// Criar um usuário
server.post("/users", checkUserName, (req, res) => {
  const { name } = req.body;

  users.push(name);
  return res.json(users);
});

// Deletar um usuário
server.delete("/users/:id", checkUserInArray, (req, res) => {
  const id = req.params.id;

  users.splice(id, 1);
  return res.send();
});

server.listen(8000);
