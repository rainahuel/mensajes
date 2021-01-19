
const Mensaje = require('../models/mensaje');

exports.newMensaje = (req, res) => {
    let mensaje = new Mensaje(req.body);
    mensaje.save((err, mensajeDB) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: "error al enviar el mensaje"
            })
        }
        res.status(201).json({
            ok: true,
            message: "el mensaje fue enviado con exito!"
        })
    }) 
} 
