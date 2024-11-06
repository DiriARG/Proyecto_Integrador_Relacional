const express = require("express");
// Creamos una instancia de router para manejar las rutas de manera modular, esto permite separar la lógica de las rutas en diferentes archivos de controladores.
const router = express.Router();
// Importamos las funciones del controlador principal, que maneja la ruta de bienvenida.
const { obtenerInfoAPI } = require("../controllers/controlador_principal");

// Definimos la ruta raíz ("/"), que devuelve información general sobre la API.
/**
 * @swagger
 * /:
 *   get:
 *     summary: Información general de la API de Trailerflix
 *     description: Proporciona una descripción general de la API, incluidas las rutas disponibles y sus funcionalidades.
 *     tags:
 *       - General
 *     responses:
 *       200:
 *         description: Información de bienvenida sobre la API de Trailerflix.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Bienvenido a la API de streaming Trailerflix! 🎬🍿📺"
 *                 descripcion:
 *                   type: string
 *                   example: "Esta API te permite realizar operaciones CRUD (consultar, agregar, actualizar y eliminar) sobre el contenido disponible en la plataforma Trailerflix, como películas y series. Además, puedes filtrar el contenido por diferentes criterios como género, título o categoría."
 *                 rutas:
 *                   type: object
 *                   properties:
 *                     contenido:
 *                       type: string
 *                       example: "Devuelve todos los contenidos de la base de datos."
 *                     contenido_id:
 *                       type: string
 *                       example: "Obtener un contenido específico por su ID."
 *                     contenido_filtrar:
 *                       type: string
 *                       example: "Filtrar contenidos por título, género o categoría. Ejemplo: /contenido/filtrar?genero=comedia."
 *                     contenido_post:
 *                       type: string
 *                       example: "Agregar una nueva película o serie a la base de datos."
 *                     contenido_patch:
 *                       type: string
 *                       example: "Actualizar parcialmente un contenido por su ID."
 *                     contenido_delete:
 *                       type: string
 *                       example: "Eliminar un contenido de la base de datos por su ID."
 *                 instrucciones:
 *                   type: string
 *                   example: "Para obtener más información sobre el uso de la API, por favor revisa el archivo README.md."
 */
router.get("/", obtenerInfoAPI);

module.exports = router;
