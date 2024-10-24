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
