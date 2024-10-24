# Proyecto Integrador: CRUD con Node.js y MySQL 🧐

En este proyecto se desarrolla una aplicación utilizando Node.js (Express JS) y MySQL (Sequelize) para gestionar el contenido disponible en la plataforma Trailerflix, que incluye películas y series. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar) sobre el contenido. Además, se ofrece la opción de filtrar el contenido por diferentes criterios, como género, título o categoría, mejorando así la experiencia de búsqueda y navegación.

## Desarrollador 👨‍💻:

- **Desarrollador:** Matías Di Risio 👍
- **GitHub:** [DiriARG](https://github.com/DiriARG)

## Docentes 👨‍🏫 :

- **Profesor:** Fabio D. Argañaraz A.
- **GitHub:** [Fabio D. Argañaraz A.](https://github.com/FabioDrizZt)
- **Tutor:** Juan Nebbia
- **GitHub:** [JuanNebbia](https://github.com/JuanNebbia)

## Tabla de contenidos 📚:

- [Previo a iniciar](#previo-a-iniciar-)
- [Instalación](#instalación-)
- [Configuración de la Base de Datos](#configuración-de-la-base-de-datos-️)
- [Iniciando el proyecto](#iniciando-el-proyecto-)
- [Configuración del archivo .env (Environment Variables)](#configuración-del-archivo-env-environment-variables-%EF%B8%8F)
- [Estructura del proyecto](#estructura-del-proyecto-)
- [Descripción de archivos](#descripción-de-archivos-)
- [Rutas de la API REST](#rutas-de-la-api-rest-%EF%B8%8F)

## Previo a iniciar 🕒:

- **Descarga e instala** Visual Studio Code, el editor de código recomendado para abordar este proyecto.
- **Descarga e instala** Node.js, un entorno de ejecución de JavaScript de código abierto y multiplataforma que permite crear servidores, aplicaciones web, APIs, herramientas de línea de comandos y scripts. Asegúrate de seleccionar la versión LTS (Long Term Support) para garantizar la estabilidad.
- **Descarga e instala** MySQL, un sistema de gestión de bases de datos relacional, junto con MySQL Workbench. Esta herramienta visual integra desarrollo de software, administración de bases de datos, diseño de bases de datos, y gestión y mantenimiento del sistema de bases de datos MySQL.

## Instalación 📥:

1. **Fork** el repositorio desde [aquí](https://github.com/DiriARG/Proyecto_Integrador_CRUD_Node.js_MySQL/fork).
2. **Clona** tu fork en tu máquina local:

```bash
git clone https://github.com/tu-usuario/tu-repositorio-fork.git
```

3. Ahora **abre** Visual Studio Code y la carpeta correspondiente (Proyecto_Integrador_CRUD_Node.js_MySQL).
4. **Inicia** una nueva terminal y escribe `npm install`, este comando en un directorio que ya contiene el archivo `package.json` genera que <u>npm</u> instale las dependencias especificadas en ese `package.json` y actualice el `package-lock.json` con las versiones exactas de esas dependencias.

- Si seguiste estas instrucciones de instalación mediante forkear el repositorio y clonandolo a tu máquina local, evita el apartado [Iniciando el proyecto](#iniciando-el-proyecto-), ya que esta orientado a las personas que simplemente han descargado algunos archivos individuales del proyecto.

## Configuración de la Base de Datos 🗄️:

1. **Verifica** la conexión con MySQL:

   - Abre **MySQL Workbench**.
   - Conéctate a una instancia de MySQL Server (por ejemplo, "local instance MySQL80").
   - Ingresa las credenciales necesarias, como la contraseña del usuario.
   - Para asegurar que todo esté funcionando correctamente, en la ventana principal de MySQL Workbench, abre un nuevo script SQL y escribe una consulta sencilla, como:

   ```sql
   select 1+1 as resultado;
   ```

   Luego, haz clic en el botón de ejecutar (ícono de rayo) o presiona Ctrl + Enter. Si la consulta se ejecuta correctamente y obtienes un resultado, tu conexión está funcionando bien.

2. **Crea** una nueva base de datos en MySQL Workbench:

   - En el menú superior, selecciona **File > Open SQL Script...** o presiona `Ctrl + Mayús + O` en el teclado.
   - Navega hasta la carpeta del proyecto `Proyecto_Integrador_CRUD_Node.js_MySQL`, ingresa en la subcarpeta `src/sql`, y selecciona el archivo **trailerflix_creación_bd_y_tablas.sql**.
   - Una vez abierto el archivo, se abrirá una nueva pestaña en MySQL Workbench. Ejecuta el script para crear la base de datos y las tablas correspondientes.

3. **Inserta** datos en las tablas:

   - Abre otro archivo SQL ubicado en la carpeta `src/sql`, llamado **trailerflix_inserts.sql**.
   - Ejecuta el archivo, lo que insertará datos en las tablas de la base de datos **trailerflix**.

4. **Verifica** la integridad de las tablas y los datos insertados:

   - Abre y ejecuta el último archivo SQL, llamado **ejemplo_consulta_sql.sql**, ubicado en la misma carpeta `src/sql`.
   - Si todo se ejecuta correctamente, deberías ver varios datos de una película, como su título, categoría, resumen, temporadas/duración, géneros, actores y trailer, visualizados de manera adecuada.

## Iniciando el proyecto 🚀:

Este apartado esta orientado a las personas que simplemente quieran descargar los archivos individualmente sin forkear el repositorio, por lo tanto, los archivos que son necesarios para el correcto funcionamiento de la API REST son los siguientes:

```plaintext
/src
  /conexion
    - database.js
  /controllers
    - controlador_principal.js
    - contenidoController.js
  /json
    - trailerflix.json
  /models
    - actor.js
    - asociaciones.js
    - categoria.js
    - contenido.js
    - genero.js
  /routes
    - ruta_principal.js
    - contenidoRoutes.js
  /sql
    - ejemplo_consulta_sql.sql
    - trailerflix_creación_bd_y_tablas.sql
    - trailerflix_inserts.sql
  /tests
    - api.http
    - Proyecto_Integrador_CRUD_Node.js_MySQL.postman_collection.json
  /utils
    - swaggerConfig.js
/.env-copy
/app.js

```

Antes de comenzar, **asegúrate** de haber completado la [Configuración de la Base de Datos](#configuración-de-la-base-de-datos-️). Si ya realizaste estos pasos y tienes la estructura del proyecto como se muestra arriba, puedes continuar con lo siguiente:

- Abre la terminal e inicializa un nuevo proyecto con `npm init -y`. Esto creará el archivo `package.json`.
- Instala las dependencias necesarias: **Express JS** (entorno para desarrollar la API), **Sequelize** (biblioteca de modelado de objetos relacionales para MySQL y Node.js), **Morgan** (middleware de registro de solicitudes HTTP), **swagger-jsdoc** (genera documentación de API a partir de comentarios JSDoc en el código) y **Swagger UI Express** (sirve una interfaz visual para interactuar con la documentación generada) con el siguiente comando:

```bash
   npm i express sequelize morgan swagger-jsdoc swagger-ui-express
```

Al instalar estos paquetes, se creará el archivo `package-lock.json` y la carpeta `node_modules`.

## Configuración del archivo .env (Environment Variables) ⚙️:

1. **Renombra** el archivo llamado `.env_copia` a `.env`.
2. **Modifica** su contenido de acuerdo con tu entorno local de desarrollo:

- DATABASE: Nombre de la base de datos a la que te vas a conectar.
- DBUSER: Nombre de usuario de tu base de datos.
- PASSWORD: Contraseña para el usuario de la base de datos.
- HOST: Dirección del host de la base de datos (por ejemplo, localhost si trabajas localmente).
- PORT: Ingresa el puerto al cual se va a usar para conectar a la API.

## Estructura del proyecto 📂:

Así será la estructura que encontraremos en nuestro editor de código fuente, en mi caso, Visual Studio Code (puede variar la estructura en caso de haber instalado los archivos de forma individual).

```plaintext
/node_modules
  - (Contiene todos los módulos y bibliotecas necesarias para el proyecto)
/src
  /conexion
    - database.js
  /controllers
    - contenidoController.js
    - controlador_principal.js
  /json
    - trailerflix.json
  /models
    - actor.js
    - asociaciones.js
    - categoria.js
    - contenido.js
    - genero.js
  /routes
    - contenidoRoutes.js
    - ruta_principal.js
  /sql
    - ejemplo_consulta_sql.sql
    - trailerflix_creación_bd_y_tablas.sql
    - trailerflix_inserts.sql
  /tests
    - api.http
    - Proyecto_Integrador_CRUD_Node.js_MySQL.postman_collection.json
  /utils
    - swaggerConfig.js
/.env
/.gitignore
/app.js
/enunciado.md
/LICENSE
/package-lock.json
/package.json
/README.md
/trailerflix_1.png
```

## Descripción de archivos 📄:

- **/node_modules**: Carpeta generada automáticamente al instalar las dependencias del proyecto. Contiene todos los módulos y bibliotecas necesarias para el funcionamiento de la aplicación.

- **/src**: Carpeta principal que contiene el código fuente de la aplicación.

  - **/conexion**: Carpeta que contiene las configuraciones generales del proyecto.

    - **database.js**: Archivo que establece y configura la conexión a la base de datos MySQL usando Sequelize.

  - **/controllers**: Carpeta que contiene la lógica de los controladores que manejan las diferentes rutas de la API.
    - **contenidoController.js**: Controlador que maneja todas las rutas relacionadas con los contenidos de "Trailerflix", como la búsqueda, filtrado, y manipulación (CRUD) de contenidos.
    - **controlador_principal.js**: Controlador que maneja la ruta de bienvenida a la API, proporcionando información general sobre la misma.
  - **/json**: Carpeta que contiene el dataset (conjunto de datos) JSON:

    - **trailerflix.json**: Archivo de formato JSON que contiene todos los contenidos (películas y series) de la plataforma "Trailerflix" que se utiliza en la base de datos.

  - **/models**: Contiene los modelos de Sequelize, que representan las tablas de la base de datos (excepto las tablas intermedias).

    - **actor.js**: Define el modelo "Actor" y sus relaciones con otras tablas.
    - **asociaciones.js**: Archivo que centraliza las relaciones entre los modelos (actores, contenido, categorías y géneros).
    - **categoria.js**: Define el modelo "Categoria" y sus relaciones.
    - **contenido.js**: Define el modelo "Contenido" y sus relaciones con actores, géneros y categorías.
    - **genero.js**: Define el modelo "Genero" y sus relaciones.

  - **/routes**: Carpeta que contiene los archivos relacionados con las rutas de la API.

    - **contenidoRoutes.js**: Define todas las rutas relacionadas con los contenidos de "Trailerflix" (crear, leer, actualizar y eliminar).
    - **ruta_principal.js**: Define la ruta principal de la API con un mensaje de bienvenida.

  - **/sql**: Contiene los archivos SQL necesarios para la creación y llenado de la base de datos.

    - **ejemplo_consulta.sql.sql**: Archivo que contiene una consulta SQL para verificar la integridad de las tablas y los datos insertados.
    - **trailerflix_creación_bd_y_tablas.sql**: Archivo SQL que crea la base de datos "trailerflix" y sus tablas.
    - **trailerflix_inserts.sql**: Archivo SQL que contiene datos listos para insertar en las tablas de "trailerflix".

  - **/tests**: Carpeta que contiene archivos para pruebas de las rutas de la API.
    - **api.http**: Archivo de la extensión "REST Client" para VS Code, utilizado para probar las solicitudes HTTP de la API.
    - **Proyecto_Integrador_CRUD_Node.js_MySQL.postman_collection.json**: Colección de Postman que contiene ejemplos de las solicitudes a la API para facilitar pruebas y desarrollo.
  - **/utils**: Carpeta que contiene archivos que se utilizan en distintas partes del proyecto.
    - **swaggerConfig**: Archivo que configura Swagger para documentar la API.

- **.env**: Archivo que almacena las variables de entorno utilizadas en la configuración del proyecto.

- **.gitignore**: Archivo que le indica a Git qué archivos o carpetas deben ser ignorados por el sistema de control de versiones.

- **app.js**: Archivo principal de la aplicación donde se inicializa el servidor y se configuran las rutas y los middlewares.

- **enunciado.md**: Archivo que fue brindado por el profesor de la diplomatura. Contiene la consigna del ejercicio a realizar junto a otros detalles que se deben cumplir para la aprobación del proyecto integrador.

- **LICENSE**: Archivo que especifica los términos y condiciones bajo los cuales el software de este repositorio puede ser utilizado, copiado, modificado o distribuido por otras personas.

- **package-lock.json**: Archivo que asegura la reproducibilidad y consistencia de las instalaciones de paquetes en el proyecto con Node.js.

- **package.json**: Archivo de configuración de npm que describe el proyecto, incluyendo metadatos como nombre, versión, descripción, scripts, dependencias y más.

- **README.md**: Archivo guía para entender y comenzar a trabajar con este proyecto.

- **trailerflix_1.png**: Imagen que muestra el modelo relacional de la base de datos "trailerflix", con sus tablas y relaciones.

## Rutas de la API REST 🛤️:

Para poder comprobar la funcionalidad de cada ruta de la API, puedes utilizar la extensión `REST Client` del marketplace de Visual Studio Code o cualquier otra herramienta que tenga como finalidad el testeo de una API, como puede ser `Postman`. Los links de descarga se encuentran en [Recursos](#recursos-).<br>
Además, este proyecto incluye la **documentación interactiva de la API** mediante `Swagger`, a la cual se puede acceder cuando la aplicación está corriendo, utilizando la ruta `/api-docs`. Después de ejecutar la aplicación, verás un mensaje en la terminal como este:

```bash
   Servidor escuchando en: http://localhost:<PORT>
   Documentación Swagger de la API en http://localhost:<PORT>/api-docs
```

Dentro del archivo `api.http` (funcional con `REST Client`) encontrarás las siguientes rutas con sus respectivas finalidades:
| PETICIÓN | URL | DESCRIPCIÓN |
|:--------:|-----|-------------|
| GET | / | Ruta principal (Devuelve un mensaje de bienvenida y un poco de información sobre la API). |
| GET | /contenido | Obtener todos los contenidos (películas y series). |
| GET | /contenido/:id | Obtener un contenido específico por su ID. |
| GET | /contenido/filtrar | Filtrar contenidos por título, género o categoría. Se puede incluir el parámetro titulo, genero, categoria o los tres en la query string. |
| POST | /contenido | Agregar un nuevo contenido (película o serie). |
| PATCH | /contenido/:id | Actualizar parcialmente un contenido por su ID. |
| DELETE | /contenido/:id | Eliminar un contenido por su ID.|
