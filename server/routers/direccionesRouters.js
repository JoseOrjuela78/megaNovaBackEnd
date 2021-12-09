const express = require('express');
const app = express();
const { getDirecciones, getIdDireccion, postDireccion, putDireccion, deleteDireccion } = require('../controllers/direccionesControllers');

app.get('/direcciones', getDirecciones);
app.get('/direccion/:id', getIdDireccion);
app.post('/direccion', postDireccion);
app.put('/direccion/:id', putDireccion);
app.delete('/direccion/:id', deleteDireccion);


module.exports = app;