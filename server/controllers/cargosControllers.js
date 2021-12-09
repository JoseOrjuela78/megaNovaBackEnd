const { response } = require('express');
const cargoModel = require('../models/cargoModel');
const moment = require('moment');
const hoy = moment(new Date()).format('YYYYMMDD h:mm:ss');
const reqSQL = require('../db/mssql');


const getCargos = async(req, res = response) => {

    const procedecure = 'select * from cargos';

    reqSQL(procedecure, 'getCargos', res);


};

const getIdCargo = async(req, res = response) => {

    let id = req.params.id;

    const procedecure = `select * from cargos where idCargo ='${id}'`;

    reqSQL(procedecure, 'getIdCargo', res);

};

const postCargo = async(req, res = response) => {

    let body = req.body;
    let c = cargoModel;
    c.cargFechaInicio = hoy;
    //c.cargFechaActualizacion
    //c.idCargo
    c.nombreCargo = body.nombreCargo;
    c.codEpicor = body.codEpicor;
    // c.estadoCargo 
    c.usuario = body.usuario;

    const procedecure = `POST_cargo '${c.cargFechaInicio}','${c.cargFechaActualizacion}','${c.nombreCargo}','${c.codEpicor}','${c.estadoCargo}','${c.usuario}','@message output'`;

    reqSQL(procedecure, 'postCargo', res);

};

const putCargo = async(req, res = response) => {

    let body = req.body;
    let id = req.params.id;
    let c = cargoModel;

    c.idCargo = parseInt(id);
    c.nombreCargo = body.nombreCargo;
    c.codEpicor = body.codEpicor;
    c.estadoCargo = body.estadoCargo;
    c.usuario = body.usuario;

    const procedecure = `PUT_cargo '${c.cargFechaActualizacion}','${c.idCargo}','${c.nombreCargo}','${c.codEpicor}','${c.estadoCargo}','${c.usuario}','@message output'`;

    reqSQL(procedecure, 'putCargo', res);

};

const deleteCargo = async(req, res = response) => {

    let id = req.params.id;

    const procedecure = `delete from cargos where idCargo ='${id}'`;

    reqSQL(procedecure, 'deleteCargo', res);
};

module.exports = {
    getCargos,
    getIdCargo,
    postCargo,
    putCargo,
    deleteCargo
};