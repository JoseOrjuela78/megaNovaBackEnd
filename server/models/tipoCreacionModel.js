const moment = require('moment');
const hoy = moment(new Date()).format('YYYYMMDD h:mm:ss');
const tipoCreacionModel = {

    tipocFechaInicio: '',
    tipocActualizacion: hoy,
    IdTipoCreacion: 1,
    tipoCreacion: '',
    descripcion: '',
    estadotipoCreacion: 1,
    usuario: ''

};

module.exports = tipoCreacionModel;