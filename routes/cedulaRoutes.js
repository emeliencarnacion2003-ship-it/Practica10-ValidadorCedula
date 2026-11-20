
const express = require('express');
const router = express.Router();

const cedulaController = require('../Controller/cedulaController');

// Ruta para validar una cédula
router.post('/validar', cedulaController.validar);

// Exportar las rutas
module.exports = router;
