## Conceitos

- Recebe requisições, acessa o banco e devolve respostas em uma estrutura de dados (JSON)
- Requisições são recebidas através de rotas
- Na composição da requisição podemos ter Query params e Route params

- Route params -> Apenas o caminho de uma rota http://exemplo.com/user/1
- Query params -> Parametros são passados pela URL http://exemplo.com/users?page=2

- Métodos HTTP: GET, POST, PUT, DELETE

- Métodos POST e PUT utilizam o **body** da requisição para enviar os dados sensíveis

- No **header** vão informações adicionais exemplo autenticação (se o usuário está autenticado), localização: “pt-Br”

## Criando a aplicação

Criar o diretório, abrir o editor e rodar inicialmente:

- `yarn init -y`

Instalar o nodemon e criar o script dentro do packages.json:

- `yarn add nodemon -D`

- `“scripts” = {“dev”: “nodemon index.js”}`

Instalar o express:

- `yarn add express`

Criar o arquivo index.js e importar o express:

- `const express = require(‘express’)`

Instanciar o express, utilizar json e deixar escutando uma porta:

- `const server = express();`

- `server.use(express.json());`

- `server.listen(8000);`

Criar rotas com a instância do express:

- `server.get(“/caminho”, (request, response) => {});`

- `server.post();`

- `server.put();`

- `server.delete();`
