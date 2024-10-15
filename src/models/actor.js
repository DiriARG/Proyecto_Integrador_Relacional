const { DataTypes } = require("sequelize");
const { sequelize } = require("../conexion/database"); // Importamos la conexión a la base de datos.

// Definimos el modelo "Actor".
const Actor = sequelize.define(
  "Actor",
  {
    idActor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "actores",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["nombre", "apellido"], // Garantiza la unicidad de la combinación nombre-apellido.
      },
    ],
  }
);

Actor.associate = (models) => {
  Actor.belongsToMany(models.Contenido, {
    through: "contenido_actores", // Sequelize manejará esta tabla intermedia.
    foreignKey: "idActor",
    otherKey: "idContenido",
    as: "contenidosPorActor",
    timestamps: false,
  });
};

module.exports = { Actor };
