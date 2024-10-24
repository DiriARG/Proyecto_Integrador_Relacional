const express = require("express");
const router = express.Router();
const contenidoController = require("../controllers/contenidoController");

// Rutas del CRUD.
// Obtener todos los contenidos.
/**
 * @swagger
 * /contenido:
 *   get:
 *     summary: Obtener todos los contenidos.
 *     description: Endpoint que devuelve todos los contenidos (películas o series) de la base de datos.
 *     tags: [Contenido]
 *     responses:
 *       200:
 *         description: Devuelve una lista de contenidos con sus respectivos detalles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ID:
 *                     type: integer
 *                     description: ID del contenido.
 *                     example: 1
 *                   Título:
 *                     type: string
 *                     description: Título del contenido.
 *                     example: "The Mandalorian"
 *                   Categoría:
 *                     type: string
 *                     description: Nombre de la categoría (Película o Serie).
 *                     example: "Serie"
 *                   Resumen:
 *                     type: string
 *                     description: Descripción del contenido.
 *                     example: "Un cazarrecompensas mandaloriano navega por los confines de la galaxia."
 *                   Temporadas/Duración:
 *                     type: string
 *                     description: Temporadas (si es serie) o duración (si es película).
 *                     example: "8 temporadas"
 *                   Géneros:
 *                     type: string
 *                     description: Lista de géneros asociados al contenido.
 *                     example: "Sci-Fi, Acción"
 *                   Actores:
 *                     type: string
 *                     description: Lista de actores asociados al contenido.
 *                     example: "Pedro Pascal, Carl Weathers"
 *                   Tráiler:
 *                     type: string
 *                     description: URL del tráiler del contenido.
 *                     example: "https://www.youtube.com/watch?v=xyz123"
 *       404:
 *         description: No se encontraron contenidos en la base de datos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No se encontraron contenidos disponibles 🕵️❗"
 *       500:
 *         description: Error interno del servidor al procesar la solicitud.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error del servidor al devolver todos los contenidos 🚫⚙️"
 */
router.get("/", contenidoController.obtenerTodosLosContenidos);

// Filtrar contenidos por título, género o categoría (búsqueda parcial).
/**
 * @swagger
 * /contenido/filtrar:
 *   get:
 *     summary: Filtrar contenidos.
 *     description: Endpoint que permite buscar contenidos (películas o series) filtrando por título, género y/o categoría. Los parámetros de consulta son opcionales y se pueden utilizar de manera combinada.
 *     tags: [Contenido]
 *     parameters:
 *       - in: query
 *         name: titulo
 *         required: false
 *         description: Filtra los contenidos que coincidan parcial o completamente con el título proporcionado.
 *         schema:
 *           type: string
 *           example: "Mandalorian"
 *       - in: query
 *         name: genero
 *         required: false
 *         description: Filtra los contenidos que pertenezcan al género proporcionado.
 *         schema:
 *           type: string
 *           example: "Sci-Fi"
 *       - in: query
 *         name: categoria
 *         required: false
 *         description: Filtra los contenidos que pertenezcan a la categoría proporcionada.
 *         schema:
 *           type: string
 *           example: "Serie"
 *     responses:
 *       200:
 *         description: Devuelve una lista de contenidos filtrados con sus respectivos detalles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ID:
 *                     type: integer
 *                     description: ID del contenido.
 *                     example: 1
 *                   Título:
 *                     type: string
 *                     description: Título del contenido.
 *                     example: "The Mandalorian"
 *                   Categoría:
 *                     type: string
 *                     description: Nombre de la categoría (Película o Serie).
 *                     example: "Serie"
 *                   Resumen:
 *                     type: string
 *                     description: Descripción del contenido.
 *                     example: "Un cazarrecompensas mandaloriano navega por los confines de la galaxia."
 *                   Temporadas/Duración:
 *                     type: string
 *                     description: Temporadas (si es serie) o duración (si es película).
 *                     example: "8 temporadas"
 *                   Géneros:
 *                     type: string
 *                     description: Lista de géneros asociados al contenido.
 *                     example: "Sci-Fi, Acción"
 *                   Actores:
 *                     type: string
 *                     description: Lista de actores asociados al contenido.
 *                     example: "Pedro Pascal, Carl Weathers"
 *                   Tráiler:
 *                     type: string
 *                     description: URL del tráiler del contenido.
 *                     example: "https://www.youtube.com/watch?v=xyz123"
 *       404:
 *         description: No se encontraron contenidos que coincidan con los filtros proporcionados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No se encontraron contenidos con los filtros proporcionados 🕵️❗"
 *       500:
 *         description: Error interno del servidor al procesar la solicitud.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error del servidor al filtrar los contenidos 🚫⚙️"
 */
router.get("/filtrar", contenidoController.filtrarContenidos);

// Obtener un contenido por ID.
/**
 * @swagger
 * /contenido/{id}:
 *   get:
 *     summary: Obtener un contenido por ID (película o serie).
 *     description: Endpoint para obtener un contenido específico.
 *     tags: [Contenido]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del contenido a buscar.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Devuelve un contenido con todos sus detalles.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ID:
 *                   type: integer
 *                   description: ID del contenido.
 *                   example: 1
 *                 Título:
 *                   type: string
 *                   description: Título del contenido.
 *                   example: "The Mandalorian"
 *                 Categoría:
 *                   type: string
 *                   description: Nombre de la categoría (Película o Serie).
 *                   example: "Serie"
 *                 Resumen:
 *                   type: string
 *                   description: Descripción del contenido.
 *                   example: "Un cazarrecompensas mandaloriano navega por los confines de la galaxia."
 *                 Temporadas/Duración:
 *                   type: string
 *                   description: Temporadas (si es serie) o duración (si es película).
 *                   example: "8 temporadas"
 *                 Géneros:
 *                   type: string
 *                   description: Lista de géneros asociados al contenido.
 *                   example: "Sci-Fi, Acción"
 *                 Actores:
 *                   type: string
 *                   description: Lista de actores asociados al contenido.
 *                   example: "Pedro Pascal, Carl Weathers"
 *                 Tráiler:
 *                   type: string
 *                   description: URL del tráiler del contenido.
 *                   example: "https://www.youtube.com/watch?v=xyz123"
 *       404:
 *         description: No se encontró el contenido con el ID proporcionado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Contenido con ID: 1 no encontrado 🕵️❗"
 *       500:
 *         description: Error interno del servidor al procesar la solicitud.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error del servidor al obtener el contenido 🚫⚙️"
 */
router.get("/:id", contenidoController.obtenerContenidoPorID);

// Agregar un nuevo contenido (película o serie).
/**
 * @swagger
 * /contenido:
 *   post:
 *     summary: Agregar un nuevo contenido.
 *     description: Endpoint para agregar una nueva película o serie a la base de datos. Se deben proporcionar todos los campos obligatorios. Si se proporcionan géneros o actores, estos deben existir previamente en la base de datos.
 *     tags: [Contenido]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título de la película o serie.
 *                 example: "Seinfeld"
 *               resumen:
 *                 type: string
 *                 description: Breve descripción del contenido.
 *                 example: "Cuatro amigos solteros, el comediante Jerry Seinfeld, el torpe George Constanza, la trabajadora frustrada Elaine Benes y el excéntrico vecino Cosmo Kramer, lidian con las vicisitudes diarias de la vida en la ciudad de Nueva York."
 *               temporadas:
 *                 type: integer
 *                 description: Número de temporadas (para series). Es opcional si se proporciona 'duracion'.
 *                 example: 9
 *               duracion:
 *                 type: integer
 *                 description: Duración en minutos (para películas). Es opcional si se proporciona 'temporadas'.
 *                 example: null
 *               trailer:
 *                 type: string
 *                 description: URL del tráiler de la película o serie.
 *                 example: "https://www.youtube.com/watch?v=hQXKyIG_NS4"
 *               idCategoria:
 *                 type: integer
 *                 description: ID de la categoría (1 para Serie, 2 para Película).
 *                 example: 1
 *               generos:
 *                 type: array
 *                 description: IDs de los géneros relacionados con la película o serie.
 *                 items:
 *                   type: integer
 *                 example: [12, 4]  # Comedia, Drama
 *               actores:
 *                 type: array
 *                 description: IDs de los actores que participan en la película o serie.
 *                 items:
 *                   type: integer
 *                 example: [836, 837, 838, 389]  # Jerry Seinfeld, Jason Alexander, Michael Richards, Julia Louis-Dreyfus
 *     responses:
 *       201:
 *         description: Contenido creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Nuevo contenido creado ✅: "
 *                 nuevoContenido:
 *                   type: object
 *                   properties:
 *                     idContenido:
 *                       type: integer
 *                       description: ID del contenido creado.
 *                       example: 98
 *                     titulo:
 *                       type: string
 *                       description: Título del contenido.
 *                       example: "Seinfeld"
 *                     resumen:
 *                       type: string
 *                       description: Resumen del contenido.
 *                       example: "Cuatro amigos solteros, el comediante Jerry Seinfeld, el torpe George Constanza, la trabajadora frustrada Elaine Benes y el excéntrico vecino Cosmo Kramer, lidian con las vicisitudes diarias de la vida en la ciudad de Nueva York."
 *                     temporadas:
 *                       type: integer
 *                       description: Número de temporadas (si es una serie).
 *                       example: 9
 *                     duracion:
 *                       type: integer
 *                       description: Duración en minutos (si es una película).
 *                       example: null
 *                     trailer:
 *                       type: string
 *                       description: URL del tráiler.
 *                       example: "https://www.youtube.com/watch?v=hQXKyIG_NS4"
 *                     idCategoria:
 *                       type: integer
 *                       description: ID de la categoría asociada.
 *                       example: 1
 *       400:
 *         description: Solicitud inválida. Puede deberse a campos obligatorios faltantes o a campos no permitidos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Todos los campos son obligatorios 🚫!"
 *       404:
 *         description: Categoría, género o actor no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "La categoría especificada no existe 🚫!"
 *       500:
 *         description: Error interno del servidor al intentar agregar el contenido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error del servidor al crear un nuevo contenido 🚫⚙️"
 */
router.post("/", contenidoController.agregarContenido);

// Actualizar parcialmente un contenido por su ID.
/**
 * @swagger
 * /contenido/{id}:
 *   patch:
 *     summary: Actualiza parcialmente un contenido por su ID.
 *     description: |
 *       Endpoint para actualizar uno o más campos de un contenido existente (película o serie) en la base de datos.
 *       Los campos permitidos para la actualización son: "titulo", "resumen", "temporadas", "duracion", "trailer", "idCategoria", "generos" y "actores".
 *       Los géneros y actores proporcionados deben existir en la base de datos, de lo contrario se devolverá un error.
 *     tags: [Contenido]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del contenido a actualizar.
 *         schema:
 *           type: integer
 *           example: 23
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título del contenido.
 *               resumen:
 *                 type: string
 *                 description: Resumen o sinopsis del contenido.
 *               temporadas:
 *                 type: integer
 *                 description: Número de temporadas si es una serie.
 *               duracion:
 *                 type: integer
 *                 description: Duración en minutos si es una película.
 *               trailer:
 *                 type: string
 *                 description: URL del trailer del contenido.
 *               idCategoria:
 *                 type: integer
 *                 description: ID de la categoría (serie o película).
 *               generos:
 *                 type: array
 *                 description: Lista de IDs de géneros asociados al contenido.
 *                 items:
 *                   type: integer
 *               actores:
 *                 type: array
 *                 description: Lista de IDs de actores asociados al contenido.
 *                 items:
 *                   type: integer
 *             example:
 *               temporadas: 6
 *     responses:
 *       200:
 *         description: Contenido actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Contenido actualizado correctamente ✅: "
 *                 contenidoActualizado:
 *                   type: object
 *                   properties:
 *                     idContenido:
 *                       type: integer
 *                       description: ID del contenido actualizado.
 *                       example: 23
 *                     titulo:
 *                       type: string
 *                       description: Título del contenido.
 *                       example: "Black Mirror"
 *                     resumen:
 *                       type: string
 *                       description: Resumen del contenido.
 *                       example: "Black Mirror es una serie de televisión británica creada por Charlie Brooker que muestra el lado oscuro de la vida y la tecnología. La serie es producida por Zeppotron para Endemol. En cuanto al contenido del programa y la estructura, Brooker ha señalado que \"cada episodio tiene un tono diferente, un entorno diferente, incluso una realidad diferente, pero todos son acerca de la forma en que vivimos ahora - y la forma en que podríamos estar viviendo en 10 minutos si somos torpes\"."
 *                     temporadas:
 *                       type: integer
 *                       description: Número de temporadas (si es una serie).
 *                       example: 6
 *                     duracion:
 *                       type: integer
 *                       description: Duración en minutos (si es una película).
 *                       example: null
 *                     trailer:
 *                       type: string
 *                       description: URL del tráiler.
 *                       example: "https://www.youtube.com/watch?v=di6emt8_ie8"
 *                     idCategoria:
 *                       type: integer
 *                       description: ID de la categoría asociada.
 *                       example: 1
 *       400:
 *         description: Solicitud inválida debido a campos no permitidos o valores incorrectos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Uno o más géneros proporcionados no existen 🚫!"
 *       404:
 *         description: Contenido no encontrado para actualizar.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Contenido con ID {id} no encontrado para su actualización ️🕵️❗"
 *       500:
 *         description: Error del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error del servidor al actualizar el contenido 🚫⚙️"
 */
router.patch("/:id", contenidoController.actualizarContenido);

// Eliminar un contenido por su ID.
/**
 * @swagger
 * /contenido/{id}:
 *   delete:
 *     summary: Eliminar un contenido por ID
 *     description: Endpoint para eliminar un contenido existente (película o serie) de la base de datos por su ID.
 *     tags: [Contenido]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del contenido a eliminar.        
 *         schema:
 *           type: integer
 *           example: 97
 *     responses:
 *       200:
 *         description: Contenido eliminado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Contenido eliminado correctamente ✅: "
 *                 contenidoEliminado:
 *                   type: object
 *                   properties:
 *                     idContenido:
 *                       type: integer
 *                       description: ID del contenido eliminado.
 *                       example: 97
 *                     titulo:
 *                       type: string
 *                       description: Título del contenido.
 *                       example: "La Familia Addams"
 *                     resumen:
 *                       type: string
 *                       description: Resumen del contenido.
 *                       example: "El delirante y gótico estilo de vida de la peculiar familia Addams se ve amenazado peligrosamente cuando el codicioso dúo que forman madre e hijo, con la ayuda de un abogado sin ningún escrúpulos, conspiran para hacerse con la fortuna familiar... (No se pierdan las locutras de Gomez, Morticia, Tío Lucas, Merlina, El tío Cosas, Dedos y Largo)"
 *                     temporadas:
 *                       type: integer
 *                       description: Número de temporadas (si es una serie).
 *                       example: null
 *                     duracion:
 *                       type: integer
 *                       description: Duración en minutos (si es una película).
 *                       example: "101 minutos"
 *                     trailer:
 *                       type: string
 *                       description: URL del tráiler.
 *                       example: "https://www.youtube.com/embed/G388UMkJIBE"
 *                     idCategoria:
 *                       type: integer
 *                       description: ID de la categoría asociada.
 *                       example: 2
 *       404:
 *         description: Contenido no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Contenido con ID {id} no encontrado 🕵️❗
 *       500:
 *         description: Error del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Error del servidor al eliminar un contenido 🚫⚙️
 */
router.delete("/:id", contenidoController.eliminarContenido);

// Exportamos el router para que pueda ser utilizado en 'app.js' u otros archivos.
module.exports = router;
