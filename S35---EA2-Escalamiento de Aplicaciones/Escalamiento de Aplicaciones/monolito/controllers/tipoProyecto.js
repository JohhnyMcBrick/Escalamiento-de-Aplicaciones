const TipoProyecto = require('../models/tipoProyecto');
const { request, response } = require('express');


const createTipoProyecto = async (req = request, res = response) => {
    const { nombre } = req.body;
    try {
        const tipoProyecto = new TipoProyecto({
            nombre
        });
        await tipoProyecto.save();
        return res.status(200).json(tipoProyecto);
    } catch (error) {
        console.error('Error al crear el tipo de proyecto:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const getTipoProyectos = async (req = request, res = response) => {
    try {
        const tipoProyecto = await TipoProyecto.find();
        return res.status(200).json(tipoProyecto);
    } catch (error) {
        console.error('Error al obtener los tipos de proyecto:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const getTipoProyectoById = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const tipoProyecto = await TipoProyecto.findById(id);
        if (!tipoProyecto) {
            return res.status(404).json({ msj: 'Tipo de proyecto no encontrado' });
        }
        return res.status(200).json(director);
    } catch (error) {
        console.error('Error al obtener el tipo de proyecto:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const updateTipoProyecto = async (req = request, res = response) => {
    const { id } = req.params;
    const { nombre } = req.body;

    try {
        const tipoProyecto = await TipoProyecto.findByIdAndUpdate(
            id,
            { nombre },
            { new: true }
        );

        if (!tipoProyecto) {
            return res.status(404).json({ msj: 'Tipo de proyecto no encontrado' });
        }

        return res.status(200).json(director);
    } catch (error) {
        console.error('Error al actualizar el tipo de proyecto:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const deleteTipoProyecto = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const tipoProyecto = await TipoProyecto.findByIdAndDelete(id);

        if (!tipoProyecto) {
            return res.status(404).json({ msj: 'Tipo de proyecto no encontrado' });
        }

        return res.status(204).json();
    } catch (error) {
        console.error('Error al eliminar el tipo de proyecto:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};




module.exports = {
    createTipoProyecto,
    getTipoProyectos,
    getTipoProyectoById,
    updateTipoProyecto,
    deleteTipoProyecto
};