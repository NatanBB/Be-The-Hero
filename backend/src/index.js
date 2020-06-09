const express = require('express'); /*importando express*/
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
const app = express(); /*variavel para criar a aplicacao*/

app.use(cors());
app.use(express.json()); /*mostrar para express que usaremos JSON, antes de todas as requisições ele vai transformar o JSON em "JS"*/
app.use(routes);
app.use(errors());

app.listen(3333);

