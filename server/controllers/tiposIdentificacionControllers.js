const { response } = require('express');
const tipoIdentificacionModel = require('../models/tipoIdentificacionModel');
const moment = require('moment');
const tipoIdentifacionModel = require('../models/tipoIdentificacionModel');
const hoy = moment(new Date()).format('YYYYMMDD h:mm:ss');
const reqSQL = require('../db/mssql');



const getTiposIdentificacion = async(req, res = response) => {

    const procedecure = 'select * from tiposIdentificacion';

    reqSQL(procedecure, 'getTiposIdentificacion', res);


};

const getIdTipoIdentificacion = async(req, res = response) => {

    let id = req.params.id;

    const procedecure = `select * from tiposIdentificacion where tipoId ='${id}'`;

    reqSQL(procedecure, 'getIdTipoIdentificacion', res);

};

const postTipoIdentificacion = async(req, res = response) => {

    let body = req.body;
    let c = tipoIdentificacionModel;
    c.tipoFechaInicio = hoy;
    c.tipoId = body.tipoId;
    c.tipoDocumento = body.tipoDocumento;
    c.usuario = body.usuario;

    const procedecure = `POST_tiposIdentificacion '${c.tipoFechaInicio}','${c.tipoActualizacion}','${c.estadotipoDocumento}','${c.tipoId}','${c.tipoDocumento}','${c.usuario}','@message output'`;

    reqSQL(procedecure, 'postTipoIdentificacion', res);

};

const putTipoIdentificacion = async(req, res = response) => {

    let body = req.body;
    let id = req.params.id;
    let c = tipoIdentifacionModel;


    c.estadotipoDocumento = body.estadotipoDocumento;
    c.tipoId = id;
    c.tipoDocumento = body.tipoDocumento;
    c.usuario = body.usuario;

    const procedecure = `PUT_tiposIdentificacion '${c.tipoActualizacion}','${c.estadotipoDocumento}','${c.tipoId}','${c.tipoDocumento}','${c.usuario}','@message output'`;

    reqSQL(procedecure, 'putTipoIdentificacion', res);

};

const deleteTipoIdentificacion = async(req, res = response) => {

    let id = req.params.id;

    const procedecure = `delete from tiposIdentificacion where tipoId ='${id}'`;

    reqSQL(procedecure, 'deleteTipoIdentificacion', res);
};

module.exports = {
    getTiposIdentificacion,
    getIdTipoIdentificacion,
    postTipoIdentificacion,
    putTipoIdentificacion,
    deleteTipoIdentificacion
};