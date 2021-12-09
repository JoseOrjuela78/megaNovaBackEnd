const moment = require('moment');
const hoy = moment(new Date()).format('YYYYMMDD h:mm:ss');
const representanteModel = {

    reprFechaInicio: '',
    reprFechaActualizacion: hoy,
    tipoId: '',
    reprNumeroIdentificacion: '',
    reprNombre: '',
    reprCorreo: 'sin correo',
    reprTelefono: '0',
    reprMovil: '0',
    reprEstadoRepresentante: 1,
    usuario: ''

};


module.exports = representanteModel;