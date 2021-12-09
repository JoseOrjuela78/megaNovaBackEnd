const express = require('express');
const app = express();
const { getRepresentantes, getIdrepresentante, postRepresentante, putRepresentante, deleteRepresentante } = require('../controllers/representantesControllers');

app.get('/representantes', getRepresentantes);
app.get('/representante/:id', getIdrepresentante);
app.post('/representante', postRepresentante);
app.put('/representante/:id', putRepresentante);
app.delete('/representante/:id', deleteRepresentante);


module.exports = app;