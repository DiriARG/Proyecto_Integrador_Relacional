const express = require('express');
const router = express.Router();
const contenidoController = require("../controllers/contenidoController");

// Rutas del CRUD.
// Obtener todos los contenidos.
router.get("/", contenidoController.obtenerTodosLosContenidos);

// Filtrar contenidos por título, género o categoría (búsqueda parcial).
router.get("/filtrar", contenidoController.filtrarContenidos);

// Obtener un contenido por ID.
router.get("/:id",contenidoController.obtenerContenidoPorID);


// Exportamos el router para que pueda ser utilizado en 'app.js' u otros archivos.
module.exports = router;