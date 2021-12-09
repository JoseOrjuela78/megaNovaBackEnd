const express = require('express');
const app = express();
const { getContraparte, getIdContraparte, getTerminoContraparte, postContraparte, putContraparte, deleteContraparte } = require('../controllers/contrapartesControllers');

app.get('/contrapartes', getContraparte);
app.get('/contraparte/:id', getIdContraparte);
app.get('/contrapartesT/:termino', getTerminoContraparte);
app.post('/contraparte', postContraparte);
app.put('/contraparte/:id', putContraparte);
app.delete('/contraparte/:id', deleteContraparte);


module.exports = app;