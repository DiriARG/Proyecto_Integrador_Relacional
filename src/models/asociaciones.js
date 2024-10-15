// Importa los modelos necesarios para establecer relaciones.
const { Actor } = require('./actor');
const { Categoria } = require('./categoria');
const { Contenido } = require('./contenido');
const { Genero } = require('./genero');

// Definimos las asociaciones entre los modelos.
// Relaciona el modelo "Actor" con "Contenido" (relación muchos a muchos).
Actor.associate({ Contenido });

// Relaciona el modelo "Categoria" con "Contenido" (relación uno a muchos).
Categoria.associate({ Contenido });

// Relaciona el modelo "Contenido" con "Genero", "Actor" y "Categoria".
Contenido.associate({ Genero, Actor, Categoria });

// Relaciona el modelo "Genero" con "Contenido" (relación muchos a muchos).
Genero.associate({ Contenido });

// Exportamos los modelos con las relaciones ya establecidas para usarlos en otras partes del proyecto.
module.exports = { Actor, Categoria, Contenido, Genero};
