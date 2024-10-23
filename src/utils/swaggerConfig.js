// Importamos swagger-jsdoc, que permite definir las especificaciones de la API en formato OpenAPI.
const swaggerJsdoc = require("swagger-jsdoc");
// Importamos swagger-ui-express, que permite visualizar la documentación de la API de manera interactiva.
const swaggerUi = require("swagger-ui-express");

// Definimos la configuración de Swagger.
const swaggerOptions = {
  definition: {
    // Utilización de la versión OpenAI 3.0.0.
    openapi: "3.0.0",
    // Información básica de la API.
    info: {
      title: "Trailerflix API",
      version: "1.0.0",
      description:
        "Esta API te permite realizar operaciones CRUD (consultar, agregar, actualizar y eliminar) sobre el contenido disponible en la plataforma Trailerflix, como películas y series. Además, puedes filtrar el contenido por diferentes criterios como género, título o categoría",
      contact: {
        name: "Matías Di Risio",
        url: "https://github.com/DiriARG",
      },
    },
    // Definimos el servidor donde corre la API (en este caso, local).
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Archivos donde están documentados los endpoints.
};

// Generamos la documentación a partir de las opciones usando swagger-jsdoc.
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Exportamos los módulos necesarios para configurar Swagger en la aplicación.
module.exports = { swaggerDocs, swaggerUi };
