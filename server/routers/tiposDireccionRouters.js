const express = require('express');
const app = express();
const { getTiposDireccion, getIdTipoDireccion, postTipoDireccion, putTipoDireccion, deleteTipoDireccion } = require('../controllers/tiposDireccionControllers');

app.get('/tiposDireccion', getTiposDireccion);
app.get('/tipoDireccion/:id', getIdTipoDireccion);
app.post('/tipoDireccion', postTipoDireccion);
app.put('/tipoDireccion/:id', putTipoDireccion);
app.delete('/tipoDireccion/:id', deleteTipoDireccion);


module.exports = app;