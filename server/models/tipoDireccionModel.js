const moment = require('moment');
const hoy = moment(new Date()).format('YYYYMMDD h:mm:ss');
const tipoDireccionModel = {

    tipodFechaInicio: '',
    tipodActualizacion: hoy,
    IdTipoDireccion: 1,
    tipoDireccion: '',
    tipoddescripcion: '',
    estadoTipoDireccion: 1,
    usuario: ''

};

module.exports = tipoDireccionModel;