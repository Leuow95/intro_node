const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});


/*
Lista de Endpoints da aplicação CRUD de mensagens
- [GET] /mensagens      - Retorna a lista de mensagens
- [GET] /mensagens/{id} - Retorna uma mensagem pelo ID
- [POST] /mensagens/    - Cria uma Nova Mensagem
- [PUT] /mensagens/{id} - Atualiza uma Mensagem
- [DELETE] /mensagens/{id} - Deleta uma Mensagem pelo ID

*/

const mensagens = [
    "primeira mensagem",
    "segunda mensagem"
];
// [GET] /mensagens - Retorna a lista de mensagens
app.get('/mensagens', (req, res) => {
    res.send(mensagens);
});

// [GET] /mensagens/{id} - Retorna uma mensagem pelo ID
app.get('/mensagens/:id', (req, res) =>{
    const id = req.params.id;
    const mensagem = mensagens[id-1];
    res.send(mensagem);
});

// [POST] /mensagens/    - Cria uma Nova Mensagem
app.post('/mensagens', (req, res) => {
  const mensagem = req.body.mensagem;

  mensagens.push(mensagem);

  res.send(`Mensagem criada com sucesso: ${mensagem}`);
});

// [PUT] /mensagens/{id} - Atualiza uma Mensagem

app.put('/mensagens/:id', (req, res) => {
  const id = req.params.id-1;

  const mensagem = req.body.mensagem;

  mensagens[id] = mensagem;
  res.send(`Mensagem atualizada com sucesso: '${mensagem}'.`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})