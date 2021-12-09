const { response } = require('express');
const contraparteModel = require('../models/contraparteModel');
const moment = require('moment');
const hoy = moment(new Date()).format('YYYYMMDD h:mm:ss');
const reqSQL = require('../db/mssql');


const getContraparte = async(req, res = response) => {

    const procedecure = 'SELECT * FROM contrapartes';

    reqSQL(procedecure, 'getContraparte', res);

};

const getIdContraparte = async(req, res = response) => {

    let id = req.params.id;

    const procedecure = `SELECT * FROM contrapartes where contNumeroIdentificacion = '${id}'`;

    reqSQL(procedecure, 'getIdContraparte', res);

};

const getTerminoContraparte = async(req, res = response) => {

    let termino = req.params.termino;

    const procedecure = `select * from contrapartes where contNombre LIKE '%'+'${termino}'+'%' OR contNumeroIdentificacion LIKE '%'+'${termino}'+'%'`;

    reqSQL(procedecure, 'getTerminoContraparte', res);

};

const postContraparte = async(req, res = response) => {

    const body = req.body;
    const c = contraparteModel;

    c.contFechaInicio = hoy;
    c.IdTipoCreacion = body.IdTipoCreacion;
    c.tipoId = body.tipoId;
    c.contfechaMatricula = body.contfechaMatricula;
    c.contNumeroIdentificacion = body.contNumeroIdentificacion;
    c.contNombre = body.contNombre;
    c.cotizaEnBolsa = body.cotizaEnBolsa;
    c.telefono = body.telefono;
    c.correo = body.correo;
    c.paginaWeb = body.paginaWeb;
    c.contCIIU = body.contCIIU;
    c.ultimoAnioRenovado = body.ultimoAnioRenovado;
    c.usuario = body.usuario;

    const procedecure = `ALUP_contraparte '${c.contFechaInicio}','${c.IdTipoCreacion}','${c.contActualizacion}','${c.tipoId}','${c.contfechaMatricula}','${c.contNumeroIdentificacion}','${c.contNombre}','${c.contActivo}','${c.cotizaEnBolsa}','${c.telefono}','${c.correo}','${c.paginaWeb}','${c.contCIIU}','${c.ultimoAnioRenovado}','${c.usuario}','@message output'`;

    reqSQL(procedecure, 'postContraparte', res);


};

const putContraparte = async(req, res = response) => {

    const body = req.body;
    const id = req.params.id;
    const c = contraparteModel;


    c.IdTipoCreacion = body.IdTipoCreacion;
    c.tipoId = body.tipoId;
    c.contfechaMatricula = body.contfechaMatricula;
    c.contNumeroIdentificacion = id;
    c.contNombre = body.contNombre;
    c.contActivo = body.contActivo;
    c.cotizaEnBolsa = body.cotizaEnBolsa;
    c.telefono = body.telefono;
    c.correo = body.correo;
    c.paginaWeb = body.paginaWeb;
    c.contCIIU = body.contCIIU;
    c.ultimoAnioRenovado = body.ultimoAnioRenovado;
    c.usuario = body.usuario;

    const procedecure = `PUT_contraparte '${c.IdTipoCreacion}','${c.contActualizacion}','${c.tipoId}','${c.contfechaMatricula}','${c.contNumeroIdentificacion}','${c.contNombre}','${c.contActivo}','${c.cotizaEnBolsa}','${c.telefono}','${c.correo}','${c.paginaWeb}','${c.contCIIU}','${c.ultimoAnioRenovado}','${c.usuario}','@message output'`;
    reqSQL(procedecure, 'putContraparte', res);

};

const deleteContraparte = async(req, res = response) => {

    let id = req.params.id;

    const procedecure = `DELETE_contraparte '${id}', '@message output'`;

    reqSQL(procedecure, 'deleteContraparte', res);
};


module.exports = {
    getContraparte,
    getIdContraparte,
    getTerminoContraparte,
    postContraparte,
    putContraparte,
    deleteContraparte
};