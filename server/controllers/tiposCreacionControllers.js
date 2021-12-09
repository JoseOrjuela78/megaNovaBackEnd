const { response } = require('express');
const tipoCreacionModel = require('../models/tipoCreacionModel');
const moment = require('moment');
const hoy = moment(new Date()).format('YYYYMMDD h:mm:ss');
const reqSQL = require('../db/mssql');


const getTiposCreacion = async(req, res = response) => {

    const procedecure = 'select * from tiposCreacion';

    reqSQL(procedecure, 'getTiposCreacion', res);


};

const getIdTipoCreacion = async(req, res = response) => {

    let id = req.params.id;

    const procedecure = `select * from tiposCreacion where IdTipoCreacion ='${id}'`;

    reqSQL(procedecure, 'getIdTipoCreacion', res);

};

const postTipoCreacion = async(req, res = response) => {

    let body = req.body;
    let c = tipoCreacionModel;
    c.tipocFechaInicio = hoy;
    c.tipoCreacion = body.tipoCreacion;
    c.descripcion = body.descripcion;
    c.usuario = body.usuario;

    const procedecure = `POST_tiposCreacion '${c.tipocFechaInicio}','${c.tipocActualizacion}','${c.tipoCreacion}','${c.descripcion}','${c.estadotipoCreacion}','${c.usuario}','@message output'`;

    reqSQL(procedecure, 'postTipoCreacion', res);

};

const putTipoCreacion = async(req, res = response) => {

    let body = req.body;
    let id = req.params.id;
    let c = tipoCreacionModel;

    c.IdTipoCreacion = parseInt(id);
    c.tipoCreacion = body.tipoCreacion;
    c.descripcion = body.descripcion;
    c.estadotipoCreacion = body.estadotipoCreacion;
    c.usuario = body.usuario;

    const procedecure = `PUT_tiposCreacion '${c.tipocActualizacion}','${c.IdTipoCreacion}','${c.tipoCreacion}','${c.descripcion}','${c.estadotipoCreacion}','${c.usuario}','@message output'`;

    reqSQL(procedecure, 'putTipoCreacion', res);

};

const deleteTipoCreacion = async(req, res = response) => {

    let id = req.params.id;

    const procedecure = `delete from tiposCreacion where IdTipoCreacion ='${id}'`;

    reqSQL(procedecure, 'deleteTipoCreacion', res);
};

module.exports = {
    getTiposCreacion,
    getIdTipoCreacion,
    postTipoCreacion,
    putTipoCreacion,
    deleteTipoCreacion
};