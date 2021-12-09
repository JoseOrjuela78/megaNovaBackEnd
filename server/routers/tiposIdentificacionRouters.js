const express = require('express');
const app = express();
const { getTiposIdentificacion, getIdTipoIdentificacion, postTipoIdentificacion, putTipoIdentificacion, deleteTipoIdentificacion } = require('../controllers/tiposIdentificacionControllers');

app.get('/tiposIdentificacion', getTiposIdentificacion);
app.get('/tipoIdentificacion/:id', getIdTipoIdentificacion);
app.post('/tipoIdentificacion', postTipoIdentificacion);
app.put('/tipoIdentificacion/:id', putTipoIdentificacion);
app.delete('/tipoIdentificacion/:id', deleteTipoIdentificacion);


module.exports = app;