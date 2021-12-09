const mssql = require('mssql');
const request = new mssql.Request();


let reqSQL = (procedecure, tipo, res) => {


    try {

        request.query(procedecure, (err, result) => {

            res.json({
                ok: true,
                result
            });

        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: `error ${tipo} conection db`
        });
    }

};

module.exports = reqSQL;