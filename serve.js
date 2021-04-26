const express = require('express');
const bodyParse = require('body-parser');
const padraoRoute = require('./src/routes/padraoRoute');
const usuarioRoute = require('./src/routes/usuarioRoute');
const statusRoute = require('./src/routes/statusRoute');
const categoriaRoute = require('./src/routes/categoriaRoute');
const listaRoute = require('./src/routes/listaRoute');
const atividadeRoute = require('./src/routes/atividadeRoute');
const errorRoute = require("./src/routes/errorRoute");

const app = express();

app.use(bodyParse.urlencoded({ extended: true }));

app.use(bodyParse.json());

padraoRoute(app);
usuarioRoute(app);
statusRoute(app);
categoriaRoute(app);
listaRoute(app);
atividadeRoute(app);
errorRoute(app);

const port = process.env.PORT || 3000;
app.listen(port);

console.log(`Servidor funcionando na porta: ${port}`);