// Importamos los modelos que ya estan asociados en el archivo "asociaciones.js".
const {
  Actor,
  Categoria,
  Contenido,
  Genero,
} = require("../models/asociaciones");

// Función para obtener todos los contenidos.
const obtenerTodosLosContenidos = async (req, res) => {
  try {
    // Con el "findAll" buscamos todos los registros de la tabla "Contenido".
    const contenidos = await Contenido.findAll({
      // Con "include" obtenemos las relaciones con las otras tablas (Categoria, Genero, Actor).
      include: [
        { model: Categoria, as: "categoria" },
        { model: Genero, as: "generos", through: { attributes: [] } }, // Evita incluir campos de la tabla intermedia "contenido_generos".
        { model: Actor, as: "actores", through: { attributes: [] } },
      ],
    });

    // Verifica si hay contenidos disponibles en la base de datos.
    if (contenidos.length === 0) {
      return res.status(404).json({ error: "No hay contenidos disponibles." });
    } else {
      // Si se encuentran contenidos, se devuelven en formato JSON.
      res.status(200).json(contenidos);
    }
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
