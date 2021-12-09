const express = require('express');
const app = express();

app.use(require('./tiposIdentificacionRouters'));
app.use(require('./tiposCreacionRouters'));
app.use(require('./contrapartesRouters'));
app.use(require('./cargosRouters'));
app.use(require('./representantesRouters'));
app.use(require('./tiposDireccionRouters'));
app.use(require('./direccionesRouters'));


module.exports = app;