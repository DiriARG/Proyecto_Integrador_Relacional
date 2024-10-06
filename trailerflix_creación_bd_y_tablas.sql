-- Crear la base de datos.
CREATE SCHEMA trailerflix
DEFAULT CHARACTER SET utf8;

-- Utilizamos la bd creada.
USE trailerflix;

-- Crear tabla categorias.
CREATE TABLE categorias (
    idCategoria INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL UNIQUE  -- Garantiza que no se repitan los nombres de categorías
);

-- Crear tabla generos.
CREATE TABLE generos (
    idGenero INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL UNIQUE 
);

-- Crear tabla actores.
CREATE TABLE actores (
    idActor INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL ,
    apellido VARCHAR(100) NOT NULL ,
    CONSTRAINT unique_nombre_apellido UNIQUE (nombre, apellido) -- Garantiza que no se repita la combinación nombre-apellido
);

-- Crear tabla contenido.
CREATE TABLE contenido (
    idContenido INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    resumen TEXT,
    temporadas INT NULL,  -- Para series
    duracion VARCHAR(100) NULL,  -- Para películas
    trailer VARCHAR(255),
    idCategoria INT,
    FOREIGN KEY (idCategoria) REFERENCES categorias(idCategoria)
);

-- Crear tabla contenido_generos (relación muchos a muchos entre contenido y generos).
CREATE TABLE contenido_generos (
    idContenido INT,
    idGenero INT,
    FOREIGN KEY (idContenido) REFERENCES contenido(idContenido),
    FOREIGN KEY (idGenero) REFERENCES generos(idGenero),
    PRIMARY KEY (idContenido, idGenero)
);

-- Crear tabla contenido_actores (relación muchos a muchos entre contenido y actores).
CREATE TABLE contenido_actores (
    idContenido INT,
    idActor INT,
    FOREIGN KEY (idContenido) REFERENCES contenido(idContenido),
    FOREIGN KEY (idActor) REFERENCES actores(idActor),
    PRIMARY KEY (idContenido, idActor)
);
