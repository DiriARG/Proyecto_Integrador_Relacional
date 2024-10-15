const { DataTypes } = require("sequelize");
const { sequelize } = require("../conexion/database");

// Definimos el modelo de "Categoria"
const Categoria = sequelize.define(
  "Categoria",
  {
    idCategoria: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Es clave primaria.
      autoIncrement: true, // Autoincrementa el valor de idCategoria.
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false, // El campo no puede ser nulo.
      unique: true, // El nombre debe ser único, por lo tanto no puede haber dos categorías con el mismo nombre.
    },
  },
  {
    tableName: "categorias",
    timestamps: false,
  }
);

Categoria.associate = (models) => {
  Categoria.hasMany(models.Contenido, {
    // Se usa "hasMany" porque la relacion es de uno a muchos, osea porque una categoría puede tener muchos contenidos.
    foreignKey: "idCategoria",
    as: "contenidosPorCategoria",
  });
};
module.exports = { Categoria }; // Exportamos el modelo de Categoria usando llaves.
