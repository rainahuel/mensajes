const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mensajeSchema = new Schema({
    nombre: {type: String, required: [true, 'el nombre es requerido']},
    correo: {type: String, required: [true, 'el email es requerido']},
    comentario: {type: String, required: [true, 'el comentario es necesario']},
})

module.exports = mongoose.model('Mensajes', mensajeSchema)