const { response } = require('express');
const direccionModel = require('../models/direccionModel');
const moment = require('moment');
const hoy = moment(new Date()).format('YYYYMMDD h:mm:ss');
const reqSQL = require('../db/mssql');


const getDirecciones = async(req, res = response) => {

    const procedecure = 'select * from direcciones';

    reqSQL(procedecure, 'getDirecciones', res);


};

const getIdDireccion = async(req, res = response) => {

    let id = req.params.id;

    const procedecure = `select * from direcciones where idDireccion ='${id}'`;

    reqSQL(procedecure, 'getIdDireccion', res);

};

const postDireccion = async(req, res = response) => {

    let body = req.body;
    let c = direccionModel;
    c.direFechaInicio = hoy;
    c.IdTipoDireccion = body.IdTipoDireccion;
    c.direNombre = body.direNombre;
    c.direTelefono = body.direTelefono;
    c.direCorreo = body.direCorreo;
    c.direccion = body.direccion;
    c.direMunicipio = body.direMunicipio;
    c.usuario = body.usuario;

    const procedecure = `POST_direccion '${c.direFechaInicio}','${c.direActualizacion}','${c.IdTipoDireccion}','${c.direNombre}','${c.direTelefono}','${c.direCorreo}','${c.direccion}','${c.direMunicipio}','${c.usuario}','@message output'`;

    reqSQL(procedecure, 'postDireccion', res);

};

const putDireccion = async(req, res = response) => {

    let body = req.body;
    let id = req.params.id;
    let c = direccionModel;

    c.idDireccion = id;
    c.IdTipoDireccion = body.IdTipoDireccion;
    c.direNombre = body.direNombre;
    c.direTelefono = body.direTelefono;
    c.direCorreo = body.direCorreo;
    c.direccion = body.direccion;
    c.direMunicipio = body.direMunicipio;
    c.usuario = body.usuario;

    const procedecure = `PUT_direccion '${c.direActualizacion}','${c.idDireccion}','${c.IdTipoDireccion}','${c.direNombre}','${c.direTelefono}','${c.direCorreo}','${c.direccion}','${c.direMunicipio}','${c.usuario}','@message output'`;

    reqSQL(procedecure, 'putDireccion', res);

};

const deleteDireccion = async(req, res = response) => {

    let id = req.params.id;

    const procedecure = `delete from direcciones where idDireccion ='${id}'`;

    reqSQL(procedecure, 'deleteDireccion', res);
};

module.exports = {
    getDirecciones,
    getIdDireccion,
    postDireccion,
    putDireccion,
    deleteDireccion
};