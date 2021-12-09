const moment = require('moment');
const hoy = moment(new Date()).format('YYYYMMDD h:mm:ss');
const cargoModel = {

    cargFechaInicio: '',
    cargFechaActualizacion: hoy,
    idCargo: '',
    nombreCargo: '',
    codEpicor: 0,
    estadoCargo: 1,
    usuario: ''

};

module.exports = cargoModel;