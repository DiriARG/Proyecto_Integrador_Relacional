-- Este archivo es para probar su correcta ejecución después de haber realizado todas las inserciones de datos en las tablas de la base de datos "trailerflix".

USE trailerflix;

-- Seleccionamos los datos a mostrar...
SELECT 
    c.titulo AS 'Título',
	cat.nombre AS 'Categoría',
    c.resumen AS 'Resumen',
    COALESCE(c.temporadas, c.duracion) AS 'Temporadas/Duración', -- Se utiliza para devolver el primer valor no nulo en una lista de expresiones. Primero evaluá si c.temporadas es nulo, entonces devuelve el valor de c.duracion; si no lo es entonces devuelve el valor de c.temporadas.
    GROUP_CONCAT(DISTINCT g.nombre SEPARATOR ', ') AS 'Géneros', -- Agrupa y concatena los géneros de la película o serie.
    GROUP_CONCAT(DISTINCT CONCAT(a.nombre, ' ', a.apellido) SEPARATOR ', ') AS 'Actores', -- Agrupa y concatena los actores, mostrando su nombre y apellido.
    c.trailer AS 'Tráiler'

-- Realizamos las uniones entre tablas.    
FROM 
    contenido c
JOIN 
    categorias cat ON c.idCategoria = cat.idCategoria
JOIN 
    contenido_generos cg ON c.idContenido = cg.idContenido
JOIN 
    generos g ON cg.idGenero = g.idGenero
JOIN 
    contenido_actores ca ON c.idContenido = ca.idContenido
JOIN 
    actores a ON ca.idActor = a.idActor
WHERE 
    c.titulo = 'It (eso)' -- Acá filtramos la serie o película para que se muestren sus datos.
GROUP BY 
    c.titulo, cat.nombre, c.resumen, c.temporadas, c.duracion, c.trailer; -- Agrupa los resultados por las columnas especificadas para evitar duplicados.
