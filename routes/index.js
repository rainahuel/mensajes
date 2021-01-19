const router = require('express').Router()
const mensajeController = require('../controllers/mensajeController')

module.exports = () => {

    
    router.post('/mensaje', mensajeController.newMensaje)

    router.get('/mensaje', mensajeController.getMensaje)

    return router;

}