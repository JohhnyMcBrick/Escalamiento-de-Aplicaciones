const Etapa = require('../models/etapa');
const { request, response } = require('express');

const createEtapa = async (req = request, res = response) => {
    const { nombre} = req.body;
    try {
        const etapa = new Etapa({
            nombre,
        });
        await etapa.save();
        return res.status(200).json(etapa);
    } catch (error) {
        console.error('Error al crear etapa', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

module.exports = {
    createEtapa
};
