const router = require('express').Router()
const mensajeController = require('../controllers/mensajeController')

module.exports = () => {

    
    router.post('/mensaje', mensajeController.newMensaje)
    router.get('/saludo', (req, resp) => {
        resp.send("hola mudno")
    })

    return router;

}