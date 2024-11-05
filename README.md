# Proyecto Integrador: CRUD con Node.js y MySQL 🧐

En este proyecto se desarrolla una aplicación utilizando Node.js (Express JS) y MySQL (Sequelize) para gestionar el contenido disponible en la plataforma Trailerflix, que incluye películas y series. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar) sobre el contenido. Además, se ofrece la opción de filtrar el contenido por diferentes criterios, como género, título o categoría, mejorando así la experiencia de búsqueda y navegación. Este proyecto está desplegado en Railway, una plataforma que facilita el despliegue y la gestión de aplicaciones.

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
- [Configuración del archivo .env.local (Environment Variables)](#configuración-del-archivo-envlocal-environment-variables-️)
- [Conectarse con Railway](#conectarse-con-railway-)
- [Estructura del proyecto](#estructura-del-proyecto-)
- [Descripción de archivos](#descripción-de-archivos-)
- [Inicialización del servidor](#inicialización-del-servidor-️)
- [Rutas de la API REST](#rutas-de-la-api-rest-%EF%B8%8F)
- [Ejemplos de uso](#ejemplos-de-uso-)
- [Recursos](#recursos-)

## Previo a iniciar 🕒:

- **Descarga e instala** Visual Studio Code, el editor de código recomendado para abordar este proyecto.
- **Descarga e instala** Node.js, un entorno de ejecución de JavaScript de código abierto y multiplataforma que permite crear servidores, aplicaciones web, APIs, herramientas de línea de comandos y scripts. Asegúrate de seleccionar la versión LTS (Long Term Support) para garantizar la estabilidad.
- **Descarga e instala** MySQL, un sistema de gestión de bases de datos relacional, junto con MySQL Workbench. Esta herramienta visual integra desarrollo de software, administración de bases de datos, diseño de bases de datos, y gestión y mantenimiento del sistema de bases de datos MySQL.
- **Git Bash**: Si decides clonar el repositorio en lugar de descargar los archivos individualmente, asegúrate de tener instalado Git Bash en tu computadora.

## Instalación 📥:

1. **Fork** del repositorio: Haz un _fork_ del repositorio desde [este enlace](https://github.com/DiriARG/Proyecto_Integrador_CRUD_Node.js_MySQL/fork).
2. **Clona** tu fork en tu máquina local:
> [!NOTE]
> No es necesario crear una carpeta manualmente para clonar el proyecto. Al ejecutar el siguiente comando, Git creará automáticamente una carpeta con el nombre del repositorio y descargará ahí todos los archivos.

- Navega hasta la ubicación donde deseas clonar el proyecto.
- Haz clic derecho en la carpeta y selecciona **"Open Git Bash here"** para abrir Git Bash en esa ubicación.
- Luego, ejecuta:

```bash
git clone https://github.com/tu-usuario/tu-repositorio-fork.git
```

3. Ahora **abre** Visual Studio Code y la carpeta correspondiente (Proyecto_Integrador_Relacional).
4. **Inicia** una nueva terminal y escribe `npm install`, este comando en un directorio que ya contiene el archivo `package.json` genera que <u>npm</u> instale las dependencias especificadas en ese `package.json` y actualice el `package-lock.json` con las versiones exactas de esas dependencias.

> [!TIP]
> Si seguiste estas instrucciones de instalación mediante forkear el repositorio y clonandolo a tu máquina local, evita el apartado [Iniciando el proyecto](#iniciando-el-proyecto-), ya que esta orientado a las personas que simplemente han descargado algunos archivos individuales del proyecto.

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
   - Navega hasta la carpeta del proyecto `Proyecto_Integrador_Relacional`, ingresa en la subcarpeta `src/sql`, y selecciona el archivo **trailerflix_creación_bd_y_tablas.sql**.
   - Una vez abierto el archivo, se abrirá una nueva pestaña en MySQL Workbench. Ejecuta el script para crear la base de datos y las tablas correspondientes.

3. **Inserta** datos en las tablas:

   - Abre otro archivo SQL ubicado en la carpeta `src/sql`, llamado **trailerflix_inserts.sql**.
   - Ejecuta el archivo, lo que insertará datos en las tablas de la base de datos **trailerflix**.

4. **Verifica** la integridad de las tablas y los datos insertados:

   - Abre y ejecuta el último archivo SQL, llamado **ejemplo_consulta_sql.sql**, ubicado en la misma carpeta `src/sql`.
   - Si todo se ejecuta correctamente, deberías ver varios datos de una película, como su título, categoría, resumen, temporadas/duración, géneros, actores y tráiler, visualizados de manera adecuada.

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
/.env.local_copy
/.env.local_railway_copy
/.env.production_copy
/app.js

```

> [!IMPORTANT]
> Antes de comenzar, **asegúrate** de haber completado la [Configuración de la Base de Datos](#configuración-de-la-base-de-datos-️). <br>

Si ya realizaste estos pasos y tienes la estructura del proyecto como se muestra arriba, puedes continuar con lo siguiente:

- Abre la terminal e inicializa un nuevo proyecto con `npm init -y`. Esto creará el archivo `package.json`.
- Instala las dependencias necesarias: **Express JS** (entorno para desarrollar la API), **Sequelize** (biblioteca de modelado de objetos relacionales para MySQL y Node.js), **mysql2** (driver de Sequelize para la base de datos MySQL), **Morgan** (middleware de registro de solicitudes HTTP), **swagger-jsdoc** (genera documentación de API a partir de comentarios JSDoc en el código), **Swagger UI Express** (sirve una interfaz visual para interactuar con la documentación generada), **dotenv** (permite cargar variables de entorno desde archivos `.env`) y **cross-env** (asegura la compatibilidad de variables de entorno, como `NODE_ENV`, en diferentes sistemas operativos como Windows, macOS y Linux, facilitando la ejecución de scripts de forma uniforme) con el siguiente comando:

```bash
   npm i express sequelize mysql2 morgan swagger-jsdoc swagger-ui-express dotenv cross-env
```

Al instalar estos paquetes, se creará el archivo `package-lock.json` y la carpeta `node_modules`.

## Configuración del archivo .env.local (Environment Variables) ⚙️:

1. **Renombra** el archivo llamado `.env.local_copy` a `.env.local`.
2. **Modifica** su contenido de acuerdo con tu entorno local de desarrollo:

- DATABASE: Nombre de la base de datos a la que te vas a conectar.
- DBUSER: Nombre de usuario de tu base de datos.
- PASSWORD: Contraseña para el usuario de la base de datos.
- HOST: Dirección del host de la base de datos (por ejemplo, localhost).

## Conectarse con Railway 🚂:

### Paso 1: Configuración en Railway

1. En la página principal de Railway, selecciona **Start a new project** y elige **Deploy MySQL**.

### Paso 2: Configuración de MySQL en MySQL Workbench

1. Crea una nueva conexión en MySQL Workbench:

   - **Connection Name**: Usa un nombre descriptivo, como `Railway Deploy`.
   - **Hostname**: Encuéntralo en la sección **Settings > Networking > Public Networking** en Railway, por ejemplo, `junction.proxy.rlwy.net`.
   - **Port**: Cambia el puerto al indicado en **Settings > Networking > Public Networking**, por ejemplo, `22298`.
   - **Username**: Lo obtienes en la sección **Variables** bajo el nombre `MYSQLUSER` (por ejemplo, `root`).
   - **Password**: Haz clic en **Store in Vault...** e ingresa la contraseña de `MYSQLPASSWORD`, encontrada en la sección **Variables** de Railway.

2. Después de crear la conexión, accede a ella en MySQL Workbench.
   - Importa y ejecuta el archivo `trailerflix_creación_bd_y_tablas.sql` para crear la base de datos y las tablas.
   - Luego, importa y ejecuta el archivo `trailerflix_inserts.sql` para insertar los datos en las tablas.

### Paso 3: Configuración de Variables de Entorno

#### Archivo `.env.local_railway_copy` cambia su nombre a `.env.local_railway`

Actualiza el archivo `.env.local_railway` con los datos de conexión de Railway:

- **DBUSER**: Cambia por el valor de `MYSQLUSER`, por ejemplo, `root`.
- **HOST**: Cambia al valor de `RAILWAY_TCP_PROXY_DOMAIN`.
- **DBPORT**: Cambia al valor de `RAILWAY_TCP_PROXY_PORT`.
- **PASSWORD**: Usa el valor de `MYSQL_ROOT_PASSWORD`.
- **DATABASE**: Especifica el nombre de la base de datos, en este caso, `trailerflix`.

#### Archivo `.env.production_copy` cambia su nombre a `.env.production`

Configura el archivo `.env.production` con las siguientes variables:

- **HOST**: Cambia al valor de `RAILWAY_PRIVATE_DOMAIN`.
- **DBPORT**: Cambia al valor de `RAILWAY_TCP_APPLICATION_PORT`.
- Los demás campos deben coincidir con los valores de `.env.local_railway`.

### Paso 4: Configurar el Repositorio de GitHub en Railway

1. Haz clic en **Create** a la derecha de la pantalla en Railway, selecciona **GitHub Repo** y, si no lo has hecho ya, inicia sesión en GitHub.
2. Pega el enlace de tu repositorio de GitHub para que Railway pueda acceder y desplegar el proyecto.

### Paso 5: Generar el Dominio de la API

1. Una vez que el proyecto esté desplegado, ve a **Settings > Networking** y en **Public Networking** haz clic en **Generate Domain** para crear un dominio público.

### Paso 6: Importar Variables de Entorno en Railway

1. En el despliegue del proyecto en Railway, ve a la sección de **Variables**. Haz clic en **Import all your variables using the Raw Editor**.
2. En el **Raw Editor**, selecciona el formato **ENV** y pega todas las variables del archivo `.env.production`.

### Paso 7: Agregar Scripts al `package.json`

Para ejecutar el proyecto en diferentes entornos, agrega los siguientes scripts en el archivo `package.json` dentro del apartado llamado **scripts**:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start:local": "cross-env NODE_ENV=local node app.js",
  "start:local_railway": "cross-env NODE_ENV=local_railway node app.js",
  "start": "cross-env NODE_ENV=production node app.js"
}
```

## Estructura del proyecto 📂:

Esta es la estructura del proyecto en el editor de código fuente (en este caso, Visual Studio Code). Puede variar si los archivos se han descargado de forma individual.

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
/.env.local
/.env.local_railway
/.env.production
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

- **.env.local**: Archivo que almacena las variables de entorno para conexiones de desarrollo local en una base de datos MySQL en localhost.

- **.env.local_railway**: Archivo que almacena las variables de entorno para conexiones de desarrollo en Railway, utilizado para pruebas en un entorno lo más cercano posible al de producción.

- **.env.production**: Archivo que almacena las variables de entorno para la conexión de base de datos en Railway en el entorno de producción, usado exclusivamente en el despliegue final de la API.

- **.gitignore**: Archivo que le indica a Git qué archivos o carpetas deben ser ignorados por el sistema de control de versiones.

- **app.js**: Archivo principal de la aplicación donde se inicializa el servidor y se configuran las rutas y los middlewares.

- **enunciado.md**: Archivo que fue brindado por el profesor de la diplomatura. Contiene la consigna del ejercicio a realizar junto a otros detalles que se deben cumplir para la aprobación del proyecto integrador.

- **LICENSE**: Archivo que especifica los términos y condiciones bajo los cuales el software de este repositorio puede ser utilizado, copiado, modificado o distribuido por otras personas.

- **package-lock.json**: Archivo que asegura la reproducibilidad y consistencia de las instalaciones de paquetes en el proyecto con Node.js.

- **package.json**: Archivo de configuración de npm que describe el proyecto, incluyendo metadatos como nombre, versión, descripción, scripts, dependencias y más.

- **README.md**: Archivo guía para entender y comenzar a trabajar con este proyecto.

- **trailerflix_1.png**: Imagen que muestra el modelo relacional de la base de datos "trailerflix", con sus tablas y relaciones.

## Inicialización del Servidor 🖥️:

El archivo `app.js` es el punto de entrada de la aplicación y se encarga de inicializar el servidor, configurando las rutas y los middlewares necesarios para que la API funcione correctamente.

Para iniciar el servidor, puedes usar uno de los siguientes comandos en la terminal:

- **`npm run start:local`**: Este comando inicia la aplicación en modo de desarrollo local, utilizando las variables de entorno definidas en `.env.local`. Es útil para realizar pruebas en tu entorno local con tu base de datos en localhost.

- **`npm run start:local_railway`**: Este comando inicia la aplicación en modo de desarrollo conectado a Railway, utilizando las variables de entorno definidas en `.env.local_railway`. Ideal para probar la conexión con la base de datos en Railway antes de subir cambios a producción.

- **`npm start`**: Este comando inicia la aplicación en modo producción, utilizando las variables de entorno de `.env.production`. Es adecuado para entornos de despliegue final, donde deseas estabilidad sin reinicios automáticos.

> [!IMPORTANT]
> Asegúrate de haber configurado correctamente los archivos `.env.local`, `.env.local_railway`, y `.env.production` antes de iniciar el servidor, ya que contiene las variables de entorno necesarias para la conexión a la base de datos y otras configuraciones importantes.

## Rutas de la API REST 🛤️:

Para comprobar la funcionalidad de cada ruta de la API, puedes utilizar la extensión `REST Client` del marketplace de Visual Studio Code o cualquier otra herramienta que tenga como finalidad el testeo de una API, como puede ser `Postman`.

> [!TIP]
> Los links de descarga se encuentran en [Recursos](#recursos-).

Si prefieres utilizar **Postman**, en el proyecto se incluye un archivo dentro de la carpeta `/tests` llamado `Proyecto_Integrador_CRUD_Node.js_MySQL.postman_collection.json`. **Importando este archivo en Postman**, tendrás acceso a todas las rutas de la API preconfiguradas para su fácil testeo. <br>
Además, este proyecto incluye la **documentación interactiva de la API** mediante `Swagger`, a la cual se puede acceder cuando la aplicación está corriendo, utilizando la ruta `/api-docs`. Después de ejecutar la aplicación, verás un mensaje en la terminal como este:

```bash
   Servidor escuchando en: http://localhost:<PORT>
   Documentación Swagger de la API en: http://localhost:<PORT>/api-docs
```

Dentro del archivo `api.http` (funcional con `REST Client`) encontrarás las siguientes rutas con sus respectivas finalidades:
| PETICIÓN | URL | DESCRIPCIÓN |
|:--------:|-----|-------------|
| GET | `/` | Ruta principal (Devuelve un mensaje de bienvenida y un poco de información sobre la API). |
| GET | `/contenido` | Obtener todos los contenidos (películas y series). |
| GET | `/contenido/:id` | Obtener un contenido específico por su ID. |
| GET | `/contenido/filtrar` | Filtrar contenidos por `título`, `género` o `categoría`. Se puede incluir el parámetro titulo, genero, categoria o los tres en la query string. |
| POST | `/contenido` | Agregar un nuevo contenido (película o serie). |
| PATCH | `/contenido/:id` | Actualizar parcialmente un contenido por su ID. |
| DELETE | `/contenido/:id` | Eliminar un contenido por su ID.|

> [!NOTE]
> Para acceder a la documentación de Swagger en producción, utiliza la siguiente URL: https://proyectointegradorrelacional-production.up.railway.app/api-docs/.
## Ejemplos de uso 🧪:

> [!NOTE]
> Estas acciones se realizan en el archivo `api.http`. Cabe aclarar que el puerto puede variar según su configuración; en este caso, se está utilizando el `3000`: <br>
> Si ejecutas la aplicación en modo desarrollo utilizando `npm run start:local` o `npm run start:local_railway`, puedes hacer pruebas directamente en `http://localhost:3000`. <br>
> Sin embargo, si ejecutas la aplicación en modo producción con `npm run start`, la aplicación ya no estará disponible en localhost. En su lugar, deberás utilizar el enlace proporcionado por Railway, como por ejemplo `https://proyectointegradorrelacional-production.up.railway.app/`. Asegúrate de actualizar la URL en tus solicitudes del archivo `api.http` para reflejar esta dirección. <br>

**GET**: **Entramos a la ruta principal**.

**Ejemplo de solicitud**:

```json

GET http://localhost:3000/

```

**Respuesta exitosa (200):** Mensaje de bienvenida y descripción de la API.

```json
{
  "mensaje": "Bienvenido a la API de streaming Trailerflix! 🎬🍿📺",
  "descripcion": "Esta API te permite realizar operaciones CRUD (consultar, agregar, actualizar y eliminar) sobre el contenido disponible en la plataforma Trailerflix, como películas y series. Además, puedes filtrar el contenido por diferentes criterios como género, título o categoría",
  "rutas": {
    "/contenido": "Devuelve todos los contenidos de la base de datos.",
    "/contenido/:id": "Obtener un contenido específico por su ID.",
    "/contenido/filtrar?{campo}=valor": "Filtrar contenidos por título, género o categoría (Ej: /contenido/filtrar?genero=comedia).",
    "/contenido (POST)": "Agregar una nueva película o serie a la base de datos",
    "/contenido/:id (PATCH)": "Actualizar parcialmente un contenido por su ID.",
    "/contenido/:id (DELETE)": "Eliminar un contenido de la base de datos por su ID."
  },
  "instrucciones": "Para obtener más información sobre el uso de la API, por favor revisa el archivo README.md"
}
```

**GET**: **Obtener todos los contenidos**.

**Ejemplo de solicitud**:

```json

GET http://localhost:3000/contenido

```

**Respuesta exitosa (200):** Devuelve una lista de todos los contenidos disponibles en la base de datos.

```json
[
  {
    "ID": 1,
    "Título": "The Mandalorian",
    "Categoría": "Serie",
    "Resumen": "Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.",
    "Temporadas/Duración": "2",
    "Géneros": "Sci-Fi, Fantasía, Acción",
    "Actores": "Pedro Pascal, Carl Weathers, Misty Rosas, Chris Bartlett, Rio Hackford, Giancarlo Esposito",
    "Tráiler": "https://www.youtube.com/embed/aOC8E8z_ifw"
  },
  {
    "ID": 2,
    "Título": "The Umbrella Academy",
    "Categoría": "Serie",
    "Resumen": "La muerte de su padre reúne a unos hermanos distanciados y con extraordinarios poderes que descubren impactantes secretos y una amenaza que se cierne sobre la humanidad.",
    "Temporadas/Duración": "1",
    "Géneros": "Sci-Fi, Fantasía, Drama",
    "Actores": "Tom Hopper, David Castañeda, Emmy Raver-Lampman, Robert Sheehan, Aidan Gallagher, Elliot Page",
    "Tráiler": "https://www.youtube.com/embed/KHucKOK-Vik"
  },
  ...
]
```

**Posibles errores**: <br>
**Código 404**:

- **Descripción**: No se encontraron contenidos en la base de datos.
- **Ejemplo de respuesta**:

```json
{
  "error": "No se encontraron contenidos disponibles 🕵️❗"
}
```

**Código 500**:

- **Descripción**: Error interno del servidor al procesar la solicitud.
- **Ejemplo de respuesta**:

```json
{
  "error": "Error del servidor al devolver todos los contenidos 🚫⚙️"
}
```

**GET**: **Obtener un contenido específico por su ID**.

**Ejemplo de solicitud**:

```json
GET http://localhost:3000/contenido/1
```

**Respuesta exitosa (200):** Detalles del contenido con el ID proporcionado.

```json
{
  "ID": 1,
  "Título": "The Mandalorian",
  "Categoría": "Serie",
  "Resumen": "Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.",
  "Temporadas/Duración": 2,
  "Géneros": "Sci-Fi, Fantasía, Acción",
  "Actores": "Pedro Pascal, Carl Weathers, Misty Rosas, Chris Bartlett, Rio Hackford, Giancarlo Esposito",
  "Tráiler": "https://www.youtube.com/embed/aOC8E8z_ifw"
}
```

**Posibles errores**: <br>
**Código 404**:

- **Descripción**: No se encontró el contenido con el ID proporcionado.
- **Ejemplo de respuesta**:

```json
{
  "error": "Contenido con ID: 1 no encontrado 🕵️❗"
}
```

**Código 500**:

- **Descripción**: Error interno del servidor al procesar la solicitud.
- **Ejemplo de respuesta**:

```json
{
  "error": "Error del servidor al obtener el contenido 🚫⚙️"
}
```

**GET**: **Filtrar contenidos por "titulo", "genero" o "categoria" (búsqueda parcial).**

**Por titulo**: <br>
**Ejemplo de solicitud**:

```json
GET http://localhost:3000/contenido/filtrar?titulo=it - capitulo
```

**Respuesta exitosa (200):** Contenidos que coincidan parcialmente con el título

```json
[
  {
    "ID": 33,
    "Título": "IT - Capítulo 2",
    "Categoría": "Película",
    "Resumen": "En este segundo capitulo Han pasado 27 años desde que el \"Club de los Perdedores\", formado por Bill, Berverly, Richie, Ben, Eddie, Mike y Stanley, se enfrentaran al macabro y despiadado Pennywise (Bill Skarsgård). En cuanto tuvieron oportunidad, abandonaron el pueblo de Derry, en el estado de Maine, que tantos problemas les había ocasionado. Sin embargo, ahora, siendo adultos, parece que no pueden escapar de su pasado. Todos deberán enfrentarse de nuevo al temible payaso para descubrir si de verdad están preparados para superar sus traumas de la infancia.",
    "Temporadas/Duración": "97 minutos",
    "Géneros": "Fantasía, Suspenso, Terror",
    "Actores": "Jessica Chastain, Bill Skarsgård, Bill Hader, James McAvoy, Isaiah Mustafa, Jay Ryan",
    "Tráiler": "https://www.youtube.com/embed/hZeFeYSmBcg"
  }
]
```

**Por genero**: <br>
**Ejemplo de solicitud**:

```json
GET http://localhost:3000/contenido/filtrar?genero=comedia
```

**Respuesta exitosa (200):** Contenidos que coincidan con el género "Comedia".

```json
[
  {
    "ID": 8,
    "Título": "The Big Bang Theory",
    "Categoría": "Serie",
    "Resumen": "Leonard y Sheldon son dos físicos que comparten trabajo y apartamento. La Serie comienza con la mudanza de Penny, su nueva y atractiva vecina, y hace hincapié en la dificultad de los físicos para relacionarse con personas fuera de su entorno para dar lugar a situaciones cómicas.",
    "Temporadas/Duración": 12,
    "Géneros": "Comedia",
    "Actores": "Jim Parsons, Johnny Galecki, Kaley Cuoco, Simon Helberg, Kunal Nayyar, Melissa Rauch, Mayim Bialik",
    "Tráiler": "https://www.youtube.com/embed/WBb3fojgW0Q"
  },
  {
    "ID": 9,
    "Título": "Friends",
    "Categoría": "Serie",
    "Resumen": "Friends narra las aventuras y desventuras de seis jóvenes de Nueva York: Rachel, Monica, Phoebe, Ross, Chandler y Joey. Ellos forman una unida pandilla de amigos que viven en Manhattan y que suelen reunirse en sus apartamentos o en su bar habitual cafetería, el Central Perk. A pesar de los numerosos cambios que se producen en sus vidas, su amistad es inquebrantable en la dura batalla por salir adelante en sus periplos profesionales y personales.",
    "Temporadas/Duración": 10,
    "Géneros": "Comedia",
    "Actores": "Jennifer Aniston, Courteney Cox, Lisa Kudrow, David Schwimmer, Matthew Perry, Matt LeBlanc",
    "Tráiler": "https://www.youtube.com/embed/ekYGfU0XIx0"
  },
  ...
]
```

**Por categoria**: <br>
**Ejemplo de solicitud**:

```json
GET http://localhost:3000/contenido/filtrar?categoria=peli
```

**Respuesta exitosa (200):** Contenidos de la categoría "Película".

```json
[
  {
    "ID": 26,
    "Título": "Enola Holmes",
    "Categoría": "Película",
    "Resumen": "La hermana menor de Sherlock, descubre que su madre ha desaparecido y se dispone a encontrarla. En su búsqueda, saca a relucir el sabueso que corre por sus venas y se encuentra con una conspiración que gira en torno a un misterioso lord, demostrando que su ilustre hermano no es el único talento en la familia.",
    "Temporadas/Duración": "97 minutos",
    "Géneros": "Drama, Ficción, Misterio",
    "Actores": "Helena Bonham Carter, Millie Bobby Brown, Henry Cavill, Sam Claflin, Louis Partridge, Adeel Akhtar",
    "Tráiler": "https://www.youtube.com/embed/3t1g2pa355k"
  },
  {
    "ID": 27,
    "Título": "Guasón",
    "Categoría": "Película",
    "Resumen": "Arthur Fleck (Phoenix) es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una Serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en el popular personaje de DC Comics Joker, conocido como archivillano de Batman, pero que en este film tomará un cariz más realista y oscuro.",
    "Temporadas/Duración": "97 minutos",
    "Géneros": "Crimen, Suspenso",
    "Actores": "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy, Brett Cullen, Shea Whigham",
    "Tráiler": "https://www.youtube.com/embed/zAGVQLHvwOY"
  },
  ...
]
```

**Filtrar por múltiples criterios a la vez (de manera conjunta)**:<br>
**Ejemplo de solicitud**:

```json
GET http://localhost:3000/contenido/filtrar?titulo=Mandalorian&genero=Sci-Fi&categoria=Serie
```

**Respuesta exitosa (200):** Detalles del contenido llamado "The Mandalorian".

```json
[
  {
    "ID": 1,
    "Título": "The Mandalorian",
    "Categoría": "Serie",
    "Resumen": "Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.",
    "Temporadas/Duración": 2,
    "Géneros": "Sci-Fi",
    "Actores": "Pedro Pascal, Carl Weathers, Misty Rosas, Chris Bartlett, Rio Hackford, Giancarlo Esposito",
    "Tráiler": "https://www.youtube.com/embed/aOC8E8z_ifw"
  }
]
```

**Posibles errores**: <br>
**Código 404**:

- **Descripción**: No se encontraron contenidos que coincidan con los filtros proporcionados.
- **Ejemplo de respuesta**:

```json
{
  "error": "No se encontraron contenidos con los filtros proporcionados 🕵️❗"
}
```

**Código 500**:

- **Descripción**: Error interno del servidor al procesar la solicitud.
- **Ejemplo de respuesta**:

```json
{
  "error": "Error del servidor al filtrar los contenidos 🚫⚙️"
}
```

**POST**: **Agregar un nuevo contenido (película o serie)**.

**Ejemplo de solicitud**:

```json

POST http://localhost:3000/contenido
content-type: application/json

{
    "titulo": "Seinfeld",
    "resumen": "Cuatro amigos solteros, el comediante Jerry Seinfeld, el torpe George Constanza, la trabajadora frustrada Elaine Benes y el excéntrico vecino Cosmo Kramer, lidian con las vicisitudes diarias de la vida en la ciudad de Nueva York.",
    "temporadas": 9,
    "duracion": null,
    "trailer": "https://www.youtube.com/watch?v=hQXKyIG_NS4",
    "idCategoria": 1,
    "generos": [12, 4],
    "actores": [836, 837, 838, 839]
}

```

**Respuesta exitosa (201):** Confirmación de que el contenido se ha creado con éxito.

```json
{
  "message": "Nuevo contenido creado ✅: ",
  "nuevoContenido": {
    "idContenido": 113,
    "titulo": "Seinfeld",
    "resumen": "Cuatro amigos solteros, el comediante Jerry Seinfeld, el torpe George Constanza, la trabajadora frustrada Elaine Benes y el excéntrico vecino Cosmo Kramer, lidian con las vicisitudes diarias de la vida en la ciudad de Nueva York.",
    "temporadas": 9,
    "duracion": null,
    "trailer": "https://www.youtube.com/watch?v=hQXKyIG_NS4",
    "idCategoria": 1
  }
}
```

**Posibles errores**: <br>
**Código 400**:

- **Descripción**: Solicitud inválida debido a campos inválidos.
- **Ejemplo de respuesta**:

```json
{
  "error": "Los siguientes campos no son válidos: {camposInvalidos}"
}
```

**Código 400**:

- **Descripción**: Solicitud inválida debido a campos obligatorios faltantes.
- **Ejemplo de respuesta**:

```json
{
  "error": "Todos los campos son obligatorios 🚫!"
}
```

**Código 404**:

- **Descripción**: Categoría no encontrada en la base de datos.
- **Ejemplo de respuesta**:

```json
{
  "error": "La categoría especificada no existe 🚫!"
}
```

**Código 404**:

- **Descripción**: El número de géneros encontrados no coincide con los proporcionados.
- **Ejemplo de respuesta**:

```json
{
  "error": "Uno o más géneros proporcionados no existen 🚫!"
}
```

**Código 404**:

- **Descripción**: El número de actores encontrados no coincide con los proporcionados.
- **Ejemplo de respuesta**:

```json
{
  "error": "Uno o más actores proporcionados no existen 🚫!"
}
```

**Código 500**:

- **Descripción**: Error interno del servidor al intentar agregar el contenido.
- **Ejemplo de respuesta**:

```json
{
  "error": "Error del servidor al crear un nuevo contenido 🚫⚙️"
}
```

**PATCH**: **Actualizar parcialmente un contenido por su ID**.

**Ejemplo de solicitud**:

```json
PATCH http://localhost:3000/contenido/23
content-type: application/json

{
    "temporadas": 6
}
```

**Respuesta exitosa (200):** Confirmación de que el contenido se ha actualizado.

```json
{
  "message": "Contenido actualizado correctamente ✅: ",
  "contenidoActualizado": {
    "idContenido": 23,
    "titulo": "Black Mirror",
    "resumen": "Black Mirror es una serie de televisión británica creada por Charlie Brooker que muestra el lado oscuro de la vida y la tecnología. La serie es producida por Zeppotron para Endemol. En cuanto al contenido del programa y la estructura, Brooker ha señalado que \"cada episodio tiene un tono diferente, un entorno diferente, incluso una realidad diferente, pero todos son acerca de la forma en que vivimos ahora - y la forma en que podríamos estar viviendo en 10 minutos si somos torpes\".",
    "temporadas": 6,
    "duracion": null,
    "trailer": "https://www.youtube.com/watch?v=di6emt8_ie8",
    "idCategoria": 1
  }
}
```

**Posibles errores**: <br>
**Código 400**:

- **Descripción**: Solicitud inválida debido a campos inválidos.
- **Ejemplo de respuesta**:

```json
{
  "error": "Los siguientes campos no son válidos: {camposInvalidos}"
}
```

**Código 404**:

- **Descripción**: Contenido no encontrado para actualizar.
- **Ejemplo de respuesta**:

```json
{
  "error": "Contenido con ID {id} no encontrado para su actualización ️🕵️❗"
}
```

**Código 404**:

- **Descripción**: El número de géneros encontrados no coincide con los proporcionados.
- **Ejemplo de respuesta**:

```json
{
  "error": "Uno o más géneros proporcionados no existen 🚫!"
}
```

**Código 404**:

- **Descripción**: El número de actores encontrados no coincide con los proporcionados.
- **Ejemplo de respuesta**:

```json
{
  "error": "Uno o más actores proporcionados no existen 🚫!"
}
```

**Código 500**:

- **Descripción**: Error interno del servidor al intentar actualizar el contenido.
- **Ejemplo de respuesta**:

```json
{
  "error": "Error del servidor al actualizar el contenido 🚫⚙️"
}
```

**DELETE**: **Eliminar un contenido por su ID**.

**Ejemplo de solicitud**:

```json

DELETE http://localhost:3000/contenido/113

```

**Respuesta exitosa (200):** Confirmación de que el contenido se ha eliminado.

```json
{
  "message": "Contenido eliminado correctamente ✅: ",
  "contenidoEliminado": {
    "idContenido": 113,
    "titulo": "Seinfeld",
    "resumen": "Cuatro amigos solteros, el comediante Jerry Seinfeld, el torpe George Constanza, la trabajadora frustrada Elaine Benes y el excéntrico vecino Cosmo Kramer, lidian con las vicisitudes diarias de la vida en la ciudad de Nueva York.",
    "temporadas": 9,
    "duracion": null,
    "trailer": "https://www.youtube.com/watch?v=hQXKyIG_NS4",
    "idCategoria": 1
  }
}
```

**Posibles errores**: <br>
**Código 404**:

- **Descripción**: Contenido no encontrado.
- **Ejemplo de respuesta**:

```json
{
  "error": "Contenido con ID {id} no encontrado 🕵️❗"
}
```

**Código 500**:

- **Descripción**: Error interno del servidor al intentar eliminar un contenido.
- **Ejemplo de respuesta**:

```json
{
  "error": "Error del servidor al eliminar un contenido 🚫⚙️"
}
```

## Recursos 🧰

Aquí encontrarás enlaces útiles para aprender más sobre las tecnologías utilizadas en este proyecto:

### Entorno de Desarrollo

- **Visual Studio Code**: [Visual Studio Code](https://code.visualstudio.com/) - Un editor de código fuente popular que ofrece extensiones útiles para desarrollo web.

### Control de Versiones

- **Git**: [Git](https://git-scm.com/) - Sistema de control de versiones distribuido utilizado para rastrear cambios en el código, colaboraciones y gestión de repositorios.

### Tecnologías de Backend

- **Node.js**: [Node.js](https://nodejs.org/) - Un entorno de ejecución para JavaScript en el lado del servidor.
- **Express**: [Express](https://expressjs.com/) - Un marco de aplicación web para Node.js, diseñado para construir aplicaciones y APIs web.
- **Morgan**: [Morgan](https://www.npmjs.com/package/morgan) - Middleware para registrar solicitudes HTTP en Node.js.

### Bases de Datos

- **MySQL**: [MySQL](https://www.mysql.com/) - Un sistema de gestión de bases de datos relacional de código abierto, conocido por su velocidad, confiabilidad y facilidad de uso. Es ampliamente utilizado en aplicaciones web y empresariales.
- **MySQL Workbench**: [MySQL Workbench](https://www.mysql.com/products/workbench/) - Una herramienta visual para diseñar, desarrollar y administrar bases de datos MySQL, que ofrece funciones de modelado, consulta y administración.

### Modelado de Datos

- **Sequelize**: [Sequelize](https://sequelize.org/) - Biblioteca de modelado de objetos relacionales para MySQL y Node.js que facilita la interacción con bases de datos a través de un enfoque basado en objetos.

### Despliegue y Gestión de Entorno

- **Railway**: [Railway](https://railway.app/) - Plataforma de despliegue que permite alojar y gestionar aplicaciones y bases de datos de manera sencilla y escalable.
- **dotenv**: [dotenv](https://www.npmjs.com/package/dotenv) - Módulo para cargar variables de entorno desde archivos `.env`, simplificando la gestión de configuraciones sensibles y específicas de cada entorno.
- **cross-env**: [cross-env](https://www.npmjs.com/package/cross-env) - Permite definir variables de entorno de forma compatible entre sistemas operativos, como `NODE_ENV`, facilitando la ejecución uniforme de scripts en diferentes entornos.

### Herramientas de Prueba

- **REST Client**: [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) - Extensión de VS Code para probar APIs directamente desde el editor.
- **Postman**: [Postman](https://www.postman.com/) - Herramienta para realizar pruebas y desarrollo de APIs.
- **Swagger**: [Swagger](https://swagger.io/) - Conjunto de herramientas que permite diseñar, construir y documentar APIs. En este proyecto, utilizamos `swagger-jsdoc` para generar documentación a partir de comentarios en el código y `swagger-ui-express` para visualizar esta documentación en la aplicación.
