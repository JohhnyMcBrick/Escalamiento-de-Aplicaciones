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

const proyecto = require('./routes/proyecto');


app.use('/api/v1/proyecto', proyecto);


module.exports = app;