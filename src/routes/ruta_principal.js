const express = require("express");
// Creamos una instancia de router para manejar las rutas de manera modular, esto permite separar la lógica de las rutas en diferentes archivos de controladores.
const router = express.Router();
// Importamos las funciones del controlador principal, que maneja la ruta de bienvenida.
const { obtenerInfoAPI } = require("../controllers/controlador_principal");

// Definimos la ruta raíz ("/"), que devuelve información general sobre la API.
router.get("/", obtenerInfoAPI);

module.exports = router;
