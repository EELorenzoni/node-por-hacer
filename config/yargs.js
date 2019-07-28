const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    defualt: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: { desc: 'Descripción de la tarea por actualizar' },
        completado
    })
    .command('borrar', 'Borra una tarea especificando su descripción', {
        descripcion: { desc: 'Descripcion de la tarea a borrar' }
    })
    .command('listar', 'Lista todas las tareas')
    .help()
    .argv;

module.exports = {
    argv
}