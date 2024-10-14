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

// Definimos las relaciones en el modelo Contenido.
Contenido.associate = (models) => {
  // Relación uno a muchos con Categorias.
  Contenido.belongsTo(models.Categoria, {
    foreignKey: "idCategoria",
    as: "categoria", // Alias para la relación.
  });

  // Relación muchos a muchos con Genero (a través de la tabla intermedia contenido_generos).
  Contenido.belongsToMany(models.Genero, {
    through: "contenido_generos",
    foreignKey: "idContenido",
    otherKey: "idGenero", // Se utiliza en "BelongsToMany", es para ser explicito sobre el nombre de la segunda clave foránea.
    as: "generos", 
  });

  // Relación muchos a muchos con Actor (a través de la tabla intermedia contenido_actores).
  Contenido.belongsToMany(models.Actor, {
    through: "contenido_actores",
    foreignKey: "idContenido",
    otherKey: "idActor",
    as: "actores", 
  });
};

module.exports = { Contenido };
