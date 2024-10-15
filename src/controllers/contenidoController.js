// Importamos los modelos que ya estan asociados en el archivo "asociaciones.js".
const {
  Actor,
  Categoria,
  Contenido,
  Genero,
} = require("../models/asociaciones");
const { sequelize } = require("../conexion/database");

// Función para obtener todos los contenidos.
const obtenerTodosLosContenidos = async (req, res) => {
  try {
    // Con el "findAll" buscamos todos los registros de la tabla "Contenido".
    const contenidos = await Contenido.findAll({
      attributes: [ // "attributes" son los nombres de las columnas de las tablas en la bd que queremos mostrar, en este caso de la tabla "contenido".
        "idContenido",
        "titulo",
        "resumen",
        "temporadas",
        "duracion",
        "trailer",
        // Creamos un campo virtual llamado "Temporadas/Duración".
        [
          sequelize.literal("COALESCE(temporadas, duracion)"), // Con "sequelize.literal" escribimos expresiones "crudas" o literales de SQL. 
          "TemporadasDuracion",
        ],
      ],
      // Con "include" obtenemos las relaciones con las otras tablas (Categoria, Genero, Actor).
      include: [
        { model: Categoria, as: "categoria", attributes: ["nombre"] },
        {
          model: Genero,
          as: "generos",
          through: { attributes: [] }, // Evitamos incluir campos de la tabla intermedia "contenido_generos".
          attributes: ["nombre"], // Seleccionamos solo el campo "nombre" del género.
        },
        {
          model: Actor,
          as: "actores",
          through: { attributes: [] }, // Evitamos incluir campos de la tabla intermedia "contenido_actores".
          attributes: ["nombre", "apellido"], // Seleccionamos solo el nombre y apellido del actor.
        },
      ],
    });

    // Verifica si hay contenidos disponibles en la base de datos.
    if (contenidos.length === 0) {
      return res.status(404).json({ error: "No hay contenidos disponibles." });
    }

    // Formateamos el resultado para que sea más legible antes de enviarlo como respuesta.
    const contenidoData = contenidos.map((contenido) => ({
      ID: contenido.idContenido, 
      Título: contenido.titulo,
      Categoría: contenido.categoria.nombre,
      Resumen: contenido.resumen,
      "Temporadas/Duración": contenido.dataValues.TemporadasDuracion, // Usamos el alias creado con COALESCE.
      Géneros: contenido.generos.map((genero) => genero.nombre).join(", "), // Concatenamos los géneros en un string.
      Actores: contenido.actores
        .map((actor) => `${actor.nombre} ${actor.apellido}`)
        .join(", "), // Concatenamos los actores (nombre y apellido).
      Tráiler: contenido.trailer,
    }));

    // Si hay contenidos disponibles, los devolvemos en formato JSON.
    res.status(200).json(contenidoData);
  } catch (error) {
    // Registramos el error en la consola para su seguimiento.
    console.error("Error al obtener los contenidos: ", error);
    // Respondemos con un mensaje al cliente.
    res.status(500).json({ error: "No se pudieron obtener los contenidos." });
  }
};

module.exports = {
  obtenerTodosLosContenidos,
};
