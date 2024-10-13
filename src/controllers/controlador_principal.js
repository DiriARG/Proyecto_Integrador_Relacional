// Ruta principal (Devuelve un mensaje de bienvenida y un poco de información sobre la API).
const obtenerInfoAPI = (req, res) => {
  res.json({
    mensaje: "Bienvenido a la API de streaming Trailerflix! 🎬🍿📺",
    descripcion: "Esta API te permite consultar ", // Completar.
    rutas: {
      //Ingresamos las rutas acá
    },
    instrucciones:
      "Para obtener más información sobre el uso de la API, por favor revisa el archivo README.md",
  });
};

// Exportamos la función para que pueda ser usada en 'ruta_principal.js' u otros archivos.
module.exports = { obtenerInfoAPI };
