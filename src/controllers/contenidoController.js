// Importamos los modelos que ya estan asociados en el archivo "asociaciones.js".
const {
  Actor,
  Categoria,
  Contenido,
  Genero,
} = require("../models/asociaciones");
const { sequelize } = require("../conexion/database");
const { Op } = require("sequelize"); // Para usar operadores avanzados de Sequelize.

// Función para obtener todos los contenidos.
const obtenerTodosLosContenidos = async (req, res) => {
  try {
    // Con el "findAll" buscamos todos los registros de la tabla "Contenido".
    const contenidos = await Contenido.findAll({
      attributes: [
        // "attributes" son los nombres de las columnas de las tablas en la bd que queremos mostrar, en este caso de la tabla "contenido".
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
      return res
        .status(404)
        .json({ error: "No se encontraron contenidos disponibles 🕵️❗" });
    }

    // Formateamos el resultado para que sea más legible antes de enviarlo como respuesta.
    const contenidoData = contenidos.map((contenido) => ({
      ID: contenido.idContenido,
      Título: contenido.titulo,
      Categoría: contenido.categoria.nombre,
      Resumen: contenido.resumen,
      "Temporadas/Duración": contenido.dataValues.TemporadasDuracion, // Usamos el alias creado con COALESCE. "dataValues" es una propiedad donde se almacena los datos de las columnas virtuales.
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
    res.status(500).json({
      error: "Error del servidor al devolver todos los contenidos 🚫⚙️",
    });
  }
};

// Función para obtener un contenido por ID.
const obtenerContenidoPorID = async (req, res) => {
  const { id } = req.params; // Obtenemos el ID desde los parámetros de la URL.
  try {
    const contenido = await Contenido.findByPk(id, {
      include: [
        { model: Categoria, as: "categoria", attributes: ["nombre"] }, // En este caso no creamos un campo virtual ya que al ser findByPk (osea traer 1 único registro) solo necesita una verificación para ver si temporadas o duración tiene un valor.
        {
          model: Genero,
          as: "generos",
          through: { attributes: [] },
          attributes: ["nombre"],
        },
        {
          model: Actor,
          as: "actores",
          through: { attributes: [] },
          attributes: ["nombre", "apellido"],
        },
      ],
    });

    // Si no existe el contenido...
    if (!contenido) {
      return res
        .status(404)
        .json({ error: `Contenido con ID:${id} no encontrado 🕵️❗` });
    }

    // Si existe, formateamos los datos.
    const contenidoData = {
      ID: contenido.idContenido,
      Título: contenido.titulo,
      Categoría: contenido.categoria.nombre,
      Resumen: contenido.resumen,
      "Temporadas/Duración": contenido.temporadas || contenido.duracion,
      Géneros: contenido.generos.map((genero) => genero.nombre).join(", "),
      Actores: contenido.actores
        .map((actor) => `${actor.nombre} ${actor.apellido}`)
        .join(", "),
      Tráiler: contenido.trailer,
    };

    res.status(200).json(contenidoData);
  } catch (error) {
    console.error(`Error al obtener el contenido con ID:${id}: `, error);
    res
      .status(500)
      .json({ error: "Error del servidor al obtener el contenido 🚫⚙️" });
  }
};

// Función para filtrar contenidos por título, género o categoría (búsqueda parcial).
const filtrarContenidos = async (req, res) => {
  const { titulo, genero, categoria } = req.query;

  try {
    // Creamos un objeto dinámico donde guardamos las condiciones de búsqueda.
    const filtro = {}; // Este objeto se usará solo para filtrar por título.

    // Filtramos por título en caso de que se proporcione.
    if (titulo) {
      filtro.titulo = { [Op.like]: `%${titulo}%` }; // "LIKE" SQL para buscar coincidencias parciales.
    }

    // Creamos un arreglo que contiene objetos que definen las relaciones que se incluirán en la consulta.
    const includeOpciones = [
      {
        model: Categoria,
        as: "categoria",
        attributes: ["nombre"],
        where: categoria ? { nombre: { [Op.like]: `%${categoria}%` } } : {}, // Filtrar por categoría si se proporciona. El "where" se utiliza para establecer condiciones en la consulta. Permite filtrar resultados en la respuesta.
      },
      {
        model: Genero,
        as: "generos",
        through: { attributes: [] },
        attributes: ["nombre"],
        where: genero ? { nombre: { [Op.like]: `%${genero}%` } } : {}, // Filtrar por género si se proporciona. Utilizamos operador ternario (? :) para evaluar la condición.
      },
      {
        model: Actor,
        as: "actores",
        through: { attributes: [] },
        attributes: ["nombre", "apellido"],
      },
    ];

    // Realizamos la consulta a la base de datos usando las condiciones dinámicas.
    const contenidos = await Contenido.findAll({
      where: filtro, // Aplicamos el filtro del título.
      include: includeOpciones, // Incluimos las relaciones con género, categoría y actores.
    });

    // Verificamos si se encontraron contenidos.
    if (contenidos.length === 0) {
      return res.status(404).json({
        error:
          "No se encontraron contenidos con los filtro proporcionados 🕵️❗",
      });
    }

    const contenidoData = contenidos.map((contenido) => ({
      ID: contenido.idContenido,
      Título: contenido.titulo,
      Categoría: contenido.categoria.nombre,
      Resumen: contenido.resumen,
      "Temporadas/Duración": contenido.temporadas || contenido.duracion,
      Géneros: contenido.generos.map((genero) => genero.nombre).join(", "),
      Actores: contenido.actores
        .map((actor) => `${actor.nombre} ${actor.apellido}`)
        .join(", "),
      Tráiler: contenido.trailer,
    }));

    res.status(200).json(contenidoData);
  } catch (error) {
    console.error("Error al filtrar los contenidos: ", error);
    res
      .status(500)
      .json({ error: "Error del servidor al filtrar los contenidos 🚫⚙️" });
  }
};

module.exports = {
  obtenerTodosLosContenidos,
  obtenerContenidoPorID,
  filtrarContenidos,
};
