const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");

// Definimos el modelo "Genero".
const Genero = sequelize.define(
  "Genero",
  {
    idGenero: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false, 
      unique: true, 
    },
  },
  {
    tableName: "generos", 
    timestamps: false, 
  }
);

module.exports = { Genero }; 
