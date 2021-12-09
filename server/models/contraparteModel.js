const moment = require('moment');
const hoy = moment(new Date()).format('YYYYMMDD h:mm:ss');
const contraparteModel = {

    contFechaInicio: '',
    IdTipoCreacion: '',
    contActualizacion: hoy,
    tipoId: 'nit',
    contfechaMatricula: '',
    contNumeroIdentificacion: '',
    contNombre: '',
    contActivo: 1,
    cotizaEnBolsa: 0,
    telefono: '',
    correo: '',
    paginaWeb: '',
    contCIIU: '82',
    ultimoAnioRenovado: '',
    usuario: ''

};


module.exports = contraparteModel;