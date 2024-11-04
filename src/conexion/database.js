// Importamos la dependencia Sequelize para interactuar con la base de datos.
const { Sequelize } = require("sequelize");
// Importamos "Dotenv".
const dotenv = require("dotenv");

// Determinamos el entorno actual. Si no se especifica, usamos "local" por defecto.
const ENV = process.env.NODE_ENV || "local";
// Cargamos las variables de entorno desde el archivo .env correspondiente.
dotenv.config({ path: `.env.${ENV}` });

// Desestructuramos las variables de entorno necesarias para la conexión.
const { DBUSER, PASSWORD, HOST, DATABASE, DBPORT } = process.env;

// Configuramos Sequelize.
const sequelize = new Sequelize(DATABASE, DBUSER, PASSWORD, {
  host: HOST,
  port: DBPORT,
  dialect: "mysql",
  pool: {
    max: 5, // Máximo de conexiones en el grupo.
    min: 0, // Mínimo de conexiones en el grupo.
    acquire: 30000, // Tiempo máximo, para liberar conexiones inactivas.
    idle: 10000, // Tiempo máximo para cerrar conexiones inactivas.
  }, 
});

// Función para probar la conexión a la base de datos.
const testConexion = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa con la base de datos ✅");
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err);
  } finally {
    console.log(
      "Finalizó el intento de conectar a MySQL. Verifique el resultado arriba."
    );
  }
};

// Ejecutamos la función de prueba.
testConexion();

// Exportamos para usar en otros módulos.
module.exports = { sequelize };
