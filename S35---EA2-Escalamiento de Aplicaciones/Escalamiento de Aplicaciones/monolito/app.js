const express = require('express');
const { mongoConn } = require('./databases/connection');
const dotenv = require('dotenv').config();
const cors = require('cors');

mongoConn();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: '*'
}))

//rutas
const tipoProyecto = require('./routes/tipoProyecto');
const cliente = require('./routes/cliente');
const universidad = require('./routes/universidad');
const etapa = require('./routes/etapa');

app.use('/api/v1/tipoProyecto', tipoProyecto);
app.use('/api/v1/cliente', cliente);
app.use('/api/v1/universidad', universidad);
app.use('/api/v1/etapa', etapa);


module.exports = app;