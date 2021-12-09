const moment = require('moment');
const hoy = moment(new Date()).format('YYYYMMDD h:mm:ss');
const direccionModel = {

    direFechaInicio: '',
    direActualizacion: hoy,
    idDireccion: '',
    IdTipoDireccion: 1,
    direNombre: '',
    direTelefono: '',
    direCorreo: '',
    direccion: '',
    direMunicipio: '',
    usuario: ''

};

module.exports = direccionModel;