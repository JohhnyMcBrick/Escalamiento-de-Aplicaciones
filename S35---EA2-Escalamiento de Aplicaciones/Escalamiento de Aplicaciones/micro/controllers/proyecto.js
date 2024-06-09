const Proyecto = require('../models/proyecto');
const { request, response } = require('express');

const createProyecto = async (req = request, res = response) => {
    const { numero,
        titulo,
        fechaInicio,
        fechaEntrega,
        valor,
        cliente,
        tipoProyecto,
        universidad,
        etapa
    } = req.body;
    try {
        const proyecto = new Proyecto({
            numero,
            titulo,
            fechaInicio,
            fechaEntrega,
            valor,
            cliente,
            tipoProyecto,
            universidad,
            etapa
        });
        await proyecto.save();
        return res.status(200).json(proyecto);
    } catch (error) {
        console.error('Error al crear proyecto', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const getProyecto = async (req = request, res = response) => {
    try {
        const proyecto = await Proyecto.find();
        return res.status(200).json(proyecto);
    } catch (error) {
        console.error('Error al obtener el proyecto:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

module.exports = {
    createProyecto,
    getProyecto
};
