const Cliente = require('../models/cliente');
const { request, response } = require('express');


const createCliente = async (req = request, res = response) => {
    const { nombre, email } = req.body;
    try {
        const cliente = new Cliente({
            nombre,
            email
        });
        await cliente.save();
        return res.status(200).json(cliente);
    } catch (error) {
        console.error('Error al crear el cliente', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }

}


const getCliente = async (req = request, res = response) => {
    try {
        const cliente = await Cliente.find();
        return res.status(200).json(cliente);
    } catch (error) {
        console.error('Error al obtener el cliente:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const getClienteById = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const cliente = await Cliente.findById(id);
        if (!cliente) {
            return res.status(404).json({ msj: 'Cliente no encontrado' });
        }
        return res.status(200).json(cliente);
    } catch (error) {
        console.error('Error al obtener el cliente:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const updateCliente = async (req = request, res = response) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const cliente = await Cliente.findByIdAndUpdate(id, updateData, { new: true }
        );

        if (!cliente) {
            return res.status(404).json({ msj: 'Cliente no encontrado' });
        }

        return res.status(200).json(cliente);
    } catch (error) {
        console.error('Error al actualizar el cliente:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const deleteCliente = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const cliente = await Cliente.findByIdAndDelete(id);

        if (!cliente) {
            return res.status(404).json({ msj: 'Cliente no encontrado' });
        }

        return res.status(204).json();
    } catch (error) {
        console.error('Error al eliminar el cliente: ', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};


module.exports = {
    createCliente,
    getCliente,
    getClienteById,
    updateCliente,
    deleteCliente,
};
