const { DataTypes } = require("sequelize");
const { sequelize } = require("../conexion/database");

// Definimos el modelo "Contenido" basado en la tabla "contenido".
const Contenido = sequelize.define(
  "Contenido",
  {
    idContenido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    resumen: {
      type: DataTypes.TEXT,
    },
    temporadas: {
      type: DataTypes.INTEGER,
      allowNull: true, // Se permiten los nulos.
    },
    duracion: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    trailer: {
      type: DataTypes.STRING(255),
    },
    idCategoria: {
      type: DataTypes.INTEGER,
      allowNull: false, // Especificamos que no puede ser nulo.
      references: {
        model: "categorias", // Nombre de la tabla de referencia.
        key: "idCategoria", // Columna de referencia.
      },
      onUpdate: "CASCADE", // Actualiza automáticamente si la clave cambia.
      onDelete: "SET NULL", // Si se elimina la categoría, deja este campo como NULL.
    },
  },
  {
    tableName: "contenido", // Nombre de la tabla en la base de datos.
    timestamps: false, // Desactiva las marcas de tiempo.
  }
);

module.exports = { Contenido };
