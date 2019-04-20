# API:

Esta api esta desarrollada con Nodejs 10.15.3 y Express 4.16.4

## Ejecutar servidor:

Para correr este codigo debes tener instalado  Nodejs y Git.
Una vez descargado el codigo con "Git pull"(Debes tener algunos cconocimmientos), instalas las dependencias con:
    npm i
Despues ejecutas el servidor de desarrollo con:
    npm run dev

##Funcionalidad:

Esta api es un Backend que funciona en conjunto con un cliente desarrollado en AngularJs. En conjunto cumplen la
funcion de un sistema de ventas para un Supermercado el cual puede llevar un control de Inventarios.
Las funcionaliades que ofrece son:

    - Autenticación mediantte tockens.
    - Registro y actualizaciínde usuarios.
    - Manejode sesiones.
    - Registro de productos.
    - Pedidos de nuevos producctos.
    - Venta de productos.
    - Control de entradas y salidas.
    - Control de cantidades.

## Librerias adiconales:

Estos modulos permiten apliar la funcionalidad de ciertas caracteristicas de la aplicación.

    -bcrypt-nodejs: Encriptación de contraseñas.
    -jwt-simple: Permite crear tokens para manejo de sesiones y autenticacón.
    -moment: Permite formatear, nalizar, validar, manipular y mostrar fechas.
    -promise-mysql: Manejador de conexion a base de datos Mysql y Querys.