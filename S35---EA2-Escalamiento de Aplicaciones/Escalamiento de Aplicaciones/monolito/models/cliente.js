const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    nombre: {
        type: String,        
        required: true
    },
    email: {
        type: String,        
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('Cliente', ClienteSchema);
