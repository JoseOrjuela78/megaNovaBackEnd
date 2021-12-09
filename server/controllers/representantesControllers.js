const { response } = require('express');
const representanteModel = require('../models/representanteModel');
const moment = require('moment');
const hoy = moment(new Date()).format('YYYYMMDD h:mm:ss');
const reqSQL = require('../db/mssql');


const getRepresentantes = async(req, res = response) => {

    const procedecure = 'SELECT * FROM representantes';

    reqSQL(procedecure, 'getRepresentantes', res);

};

const getIdrepresentante = async(req, res = response) => {

    let id = req.params.id;

    const procedecure = `SELECT * FROM representantes where reprNumeroIdentificacion = '${id}'`;

    reqSQL(procedecure, 'getIdrepresentante', res);

};

const postRepresentante = async(req, res = response) => {

    const body = req.body;
    const c = representanteModel;

    c.reprFechaInicio = hoy;
    c.tipoId = body.tipoId;
    c.reprNumeroIdentificacion = body.reprNumeroIdentificacion;
    c.reprNombre = body.reprNombre;
    c.reprCorreo = body.reprCorreo;
    c.reprTelefono = body.reprTelefono;
    c.reprMovil = body.reprMovil;
    c.usuario = body.usuario;

    const procedecure = `POST_representante '${c.reprFechaInicio}','${c.reprFechaActualizacion}','${c.tipoId}','${c.reprNumeroIdentificacion}','${c.reprNombre}','${c.reprCorreo}','${c.reprTelefono}','${c.reprMovil}','${c.reprEstadoRepresentante}','${c.usuario}','@message output'`;

    reqSQL(procedecure, 'postRepresentante', res);


};

const putRepresentante = async(req, res = response) => {

    const body = req.body;
    const id = req.params.id;
    const c = representanteModel;



    c.tipoId = body.tipoId;
    c.reprNumeroIdentificacion = body.reprNumeroIdentificacion;
    c.reprNombre = body.reprNombre;
    c.reprCorreo = body.reprCorreo;
    c.reprCorreo = body.reprTelefono;
    c.reprMovil = body.reprMovil;
    c.reprEstadoRepresentante = body.reprEstadoRepresentante;
    c.usuario = body.usuario;

    const procedecure = `PUT_representante '${c.reprFechaActualizacion}','${c.tipoId}','${c.reprNumeroIdentificacion}','${c.reprNombre}','${c.reprCorreo}','${c.reprTelefono}','${c.reprMovil}','${c.reprEstadoRepresentante}','${c.usuario}','@message output'`;

    reqSQL(procedecure, 'putRepresentante', res);

};

const deleteRepresentante = async(req, res = response) => {

    let id = req.params.id;

    const procedecure = `delete representantes where reprNumeroIdentificacion = '${id}'`;

    reqSQL(procedecure, 'deleteRepresentante', res);
};


module.exports = {
    getRepresentantes,
    getIdrepresentante,
    postRepresentante,
    putRepresentante,
    deleteRepresentante
};