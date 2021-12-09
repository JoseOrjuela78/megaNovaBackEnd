const express = require('express');
var cors = require('cors');
const app = express();
const path = require('path');
const { dbConnection } = require('./db/config');

app.set('port', process.env.PORT || 3005);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dbConnection();
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(require('./routers/index'));
app.listen(app.get('port'), () => {
    console.log('Escuchando por el puerto: ', app.get('port'));
});