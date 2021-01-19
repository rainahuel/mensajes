const mongoose = require("mongoose");

const options = {
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

mongoose.connect(process.env.DB_URL, options)
.then(() => console.log("Conexion base de datos OK!"))
.catch(err => console.log("Error al conectar con mongoDB: ", err))

require("../models/mensaje")
