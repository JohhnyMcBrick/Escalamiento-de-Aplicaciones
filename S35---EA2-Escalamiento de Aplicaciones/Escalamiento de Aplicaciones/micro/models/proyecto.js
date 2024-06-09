const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    numero: {
        type: String,
        unique: true,
        required: [true, 'numero unico del proyecto requerido']
    },
    titulo: {
        type: String,
        required: [true, 'Título del proyecto'],
        minlength: 1
    },
    fechaInicio: {
        type: Date
    },
    fechaEntrega: {
        type: Date
    },
    valor: {
        type: Number
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
    }
});

module.exports = model('Proyecto', ProyectoSchema);
