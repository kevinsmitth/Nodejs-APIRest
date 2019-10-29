const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect(
  /* MongoDB aqui */,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
// req.query = Acessar query params (para filtros)
// red.params = Acessar route params (para edição, deletar)
// req.body = Acessar corpo da requisição (para criação e edição de registros)
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '../', 'uploads')));
app.use(routes);

app.listen(3333);
