const express = require('express');
const app = express();
const { getTiposCreacion, getIdTipoCreacion, postTipoCreacion, putTipoCreacion, deleteTipoCreacion } = require('../controllers/tiposCreacionControllers');

app.get('/tiposCreacion', getTiposCreacion);
app.get('/tipoCreacion/:id', getIdTipoCreacion);
app.post('/tipoCreacion', postTipoCreacion);
app.put('/tipoCreacion/:id', putTipoCreacion);
app.delete('/tipoCreacion/:id', deleteTipoCreacion);


module.exports = app;