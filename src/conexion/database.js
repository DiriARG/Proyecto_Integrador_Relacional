// Importamos la dependencia Sequelize para interactuar con la base de datos.
const { Sequelize } = require("sequelize");

// Cargamos la variables de entorno desde el .env
process.loadEnvFile();
const { DBUSER, PASSWORD, HOST, DATABASE } = process.env;

// Configuramos Sequelize.
const sequelize = new Sequelize(DATABASE, DBUSER, PASSWORD, {
  host: HOST,
  dialect: "mysql",
  pool: {
    max: 5, // Máximo de conexiones en el grupo.
    min: 0, // Minimo de conexiones en el grupo.
    acquire: 30000, // Tiempo máximo, para liberar conexiones inactivas.
    idle: 10000, // Tiempo máximo para cerrar conexiones inactivas.
  }, 
});

// Función para probar la conexión a la base de datos.
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa con la base de datos.");
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err);
  } finally {
    console.log(
      "Finalizó el intento de conectar a MySQL. Verifique el resultado arriba."
    );
  }
};

// Ejecutamos la función de prueba.
testConnection();

// Exportamos para usar en otros módulos.
module.exports = { sequelize };
