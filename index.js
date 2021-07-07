const express = require('express');
const app = express();
const port = 3000;

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
//- [GET] /mensagens - Retorna a lista de mensagens
app.get('/mensagens', (req, res) => {
    res.send(mensagens);
});

//- [GET] /mensagens/{id} - Retorna uma mensagem pelo ID
app.get('/mensagens/:id', (req, res) =>{
    const id = req.params.id;
    const mensagem = mensagens[id-1];
    res.send(mensagem);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})