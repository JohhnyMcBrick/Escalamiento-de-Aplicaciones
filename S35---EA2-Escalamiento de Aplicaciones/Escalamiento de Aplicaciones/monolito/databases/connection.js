const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        })
        console.log("Conexion OK")
    }
    catch (e) {
        console.log("Error al conectarse ", console.error())
    }
}

module.exports = {mongoConn}