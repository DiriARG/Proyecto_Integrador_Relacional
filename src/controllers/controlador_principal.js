// Ruta principal (Devuelve un mensaje de bienvenida y un poco de información sobre la API).
const obtenerInfoAPI = (req, res) => {
  res.json({
    mensaje: "Bienvenido a la API de streaming Trailerflix! 🎬🍿📺",
    descripcion:
      "Esta API te permite realizar operaciones CRUD (consultar, agregar, actualizar y eliminar) sobre el contenido disponible en la plataforma Trailerflix, como películas y series. Además, puedes filtrar el contenido por diferentes criterios como género, título o categoría",
    rutas: {
      "/contenido": "Devuelve todos los contenidos de la base de datos.",
      "/contenido/:id": "Obtener un contenido específico por su ID.",
      "/contenido/filtrar?{campo}=valor":
        "Filtrar contenidos por título, género o categoría (Ej: /contenido/filtrar?genero=comedia).",
      "/contenido": "Agregar una nueva pelicula o serie a la base de datos",
      "/contenido/:id": "Actualizar parcialmente un contenido por su ID.",
      "/contenido/:id": "Eliminar un contenido de la base de datos por su ID.",
    },
    instrucciones:
      "Para obtener más información sobre el uso de la API, por favor revisa el archivo README.md",
  });
};

// Exportamos la función para que pueda ser usada en 'ruta_principal.js' u otros archivos.
module.exports = { obtenerInfoAPI };
