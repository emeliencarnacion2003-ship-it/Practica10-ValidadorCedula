
const express = require('express');
const path = require('path');

const cedulaRoutes = require('./routes/cedulaRoutes');

const app = express();
const PORT = 3000;

// Permitir que Express reciba datos en formato JSON
app.use(express.json());

// Mostrar los archivos del frontend
app.use(express.static(path.join(__dirname, 'public')));

// Conectar las rutas de la API
app.use('/api', cedulaRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
