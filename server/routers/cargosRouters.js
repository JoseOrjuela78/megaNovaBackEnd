const express = require('express');
const app = express();
const { getCargos, getIdCargo, postCargo, putCargo, deleteCargo } = require('../controllers/cargosControllers');

app.get('/cargos', getCargos);
app.get('/cargo/:id', getIdCargo);
app.post('/cargo', postCargo);
app.put('/cargo/:id', putCargo);
app.delete('/cargo/:id', deleteCargo);


module.exports = app;