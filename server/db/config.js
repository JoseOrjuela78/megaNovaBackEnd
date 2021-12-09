const mssql = require('mssql');

var config = {
    user: 'SA',
    password: '19780914Jao',
    server: '127.0.0.1', //'192.168.0.30',
    port: 1433,
    database: 'MegaNovaDB',
    options: {
        enableArithAbort: true,
        encrypt: false
    }
};

const dbConnection = async() => {

    try {

        await mssql.connect(config, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Base de datos SQL On Line');
                }

            }

        );

    } catch (error) {
        console.log(error);
        throw new Error('Error de connection');

    }
};

module.exports = {
    dbConnection
};