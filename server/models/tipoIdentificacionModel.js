const moment = require('moment');
const hoy = moment(new Date()).format('YYYYMMDD h:mm:ss');
const tipoIdentifacionModel = {

    tipoFechaInicio: '',
    tipoActualizacion: hoy,
    estadotipoDocumento: 1,
    tipoId: '',
    tipoDocumento: '',
    usuario: ''

};

module.exports = tipoIdentifacionModel;