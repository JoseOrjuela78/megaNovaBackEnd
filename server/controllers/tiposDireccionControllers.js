const { response } = require('express');
const tipoDireccionModel = require('../models/tipoDireccionModel');
const moment = require('moment');
const hoy = moment(new Date()).format('YYYYMMDD h:mm:ss');
const reqSQL = require('../db/mssql');


const getTiposDireccion = async(req, res = response) => {

    const procedecure = 'select * from tiposDireccion';

    reqSQL(procedecure, 'getTiposDireccion', res);


};

const getIdTipoDireccion = async(req, res = response) => {

    let id = req.params.id;

    const procedecure = `select * from tiposDireccion where IdTipoDireccion ='${id}'`;

    reqSQL(procedecure, 'getIdTipoDireccion', res);

};

const postTipoDireccion = async(req, res = response) => {

    let body = req.body;
    let c = tipoDireccionModel;
    c.tipodFechaInicio = hoy;
    c.tipoDireccion = body.tipoDireccion;
    c.tipoddescripcion = body.tipoddescripcion;
    c.usuario = body.usuario;

    const procedecure = `POST_tiposDireccion '${c.tipodFechaInicio}','${c.tipodActualizacion}','${c.tipoDireccion}','${c.tipoddescripcion}','${c.estadoTipoDireccion}','${c.usuario}','@message output'`;

    reqSQL(procedecure, 'postTipoDireccion', res);

};

const putTipoDireccion = async(req, res = response) => {

    let body = req.body;
    let id = req.params.id;
    let c = tipoDireccionModel;

    c.IdTipoDireccion = id;
    c.tipoDireccion = body.tipoDireccion;
    c.tipoddescripcion = body.tipoddescripcion;
    c.estadoTipoDireccion = body.estadoTipoDireccion;
    c.usuario = body.usuario;

    const procedecure = `PUT_tipoDireccion '${c.tipodActualizacion}','${c.IdTipoDireccion}','${c.tipoDireccion}','${c.tipoddescripcion}','${c.estadoTipoDireccion}','${c.usuario}','@message output'`;

    reqSQL(procedecure, 'putTipoDireccion', res);

};

const deleteTipoDireccion = async(req, res = response) => {

    let id = req.params.id;

    const procedecure = `delete from tiposDireccion where IdTipoDireccion ='${id}'`;

    reqSQL(procedecure, 'deleteTipoDireccion', res);
};

module.exports = {
    getTiposDireccion,
    getIdTipoDireccion,
    postTipoDireccion,
    putTipoDireccion,
    deleteTipoDireccion
};