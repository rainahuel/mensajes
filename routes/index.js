const router = require('express').Router()
const mensajeController = require('../controllers/mensajeController')

module.exports = () => {

    
    router.post('/mensaje', mensajeController.newMensaje)

    router.get('/mensajes', (req, res) => {
        res.status(200).json({
            mensaje: "hola mudno"
        })
    })

    return router;

}