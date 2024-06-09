const { Schema, model } = require('mongoose');

const EtapaSchema = Schema({
    nombre: {
        type: String,
        enum: ['anteproyecto', 'entrega parcial 1', 'entrega parcial 2', 'entrega final'],
        required: [true, 'Nombre del tipo de proyecto requerido']
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = model('Etapa', EtapaSchema);
