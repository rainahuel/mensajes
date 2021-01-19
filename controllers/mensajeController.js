
const Mensaje = require('../models/mensaje');

exports.newMensaje = (req, res) => {
    let mensaje = new Mensaje(req.body);
    mensaje.save((err, mensajeDB) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: "error al guardar el mensaje"
            })
        }
        res.status(201).json({
            ok: true,
            message: "el mensaje fue guardado con exito!"
        })
    }) 
} 

exports.getMensaje = (req, res) => {

    Mensaje.find( (err, mensajes) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: "error al guardar el mensaje"
            })
        }
        res.status(201).json({
            ok: true,
            messages: mensajes
        })
    })
}