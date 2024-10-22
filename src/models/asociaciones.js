/*Explicación del archivo: 
Este archivo garantiza que, al cargar la aplicación, todas las relaciones estén configuradas y listas para su uso en cualquier operación que lo requiera, mientras que las definiciones en los modelos individuales permiten mantener el código organizado y claro, facilitando la documentación y el trabajo modular. 
En conjunto, estas dos capas de definiciones aseguran que las relaciones estén bien gestionadas y disponibles sin causar errores en la aplicación.
La creación de este mismo archivo fue la solución al error "SequelizeEagerLoadingError: Categoria is not associated to Contenido!".
Este mismo surgía aun cuando importaba todos los modelos en "contenidoController.js":
const { Categoria } = require('../models/categoria');
const { Genero } = require('../models/genero');
const { Actor } = require('../models/actor');
const { Contenido } = require('../models/contenido');
Por lo tanto se creo este archivo para que las relaciones esten inicializadas y sean conocidas por Sequelize antes de realizar consultas. 
*/
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
