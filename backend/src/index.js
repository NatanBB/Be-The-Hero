const express = require('express'); /*importando express*/
const cors = require('cors')
const routes = require('./routes')
const app = express(); /*variavel para criar a aplicacao*/

app.use(cors());
app.use(express.json()); /*mostrar para express que usaremos JSON, antes de todas as requisições ele vai transformar o JSON em "JS"*/
app.use(routes);
app.listen(3333);

/*
    Métodos HTTP

    GET: Buscar/listar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end

*/ 

/**
 * Tipos de parâmetros:
 * 
 * Query Parms: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
 * Route Parms: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */