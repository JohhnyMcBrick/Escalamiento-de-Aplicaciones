const Universidad = require('../models/universidad');
const { request, response } = require('express');


const createUniversidad = async (req = request, res = response) => {
    const { nombre, direccion, telefono } = req.body;
    try {
        const universidad = new Universidad({
            nombre,
            direccion,
            telefono
        });
        await universidad.save();
        return res.status(200).json(universidad);
    } catch (error) {
        console.error('Error al crear universidad', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

module.exports = {
    createUniversidad
};
