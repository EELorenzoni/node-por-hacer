const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar', err)
    })
}

const cargarDB = () => {
    try {
        return listadoPorHacer = require('../db/data.json');
    } catch (error) {
        return listadoPorHacer = []
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {

    return cargarDB();
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB(listadoPorHacer);
        return true;
    }
    return false;
}
const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter((tarea) => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    }
    listadoPorHacer = nuevoListado;
    guardarDB(nuevoListado);
    return true;
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}