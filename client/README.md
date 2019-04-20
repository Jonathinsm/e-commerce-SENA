# Cliente:

Este cliente esta construiido con [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Ejecutar servidor:

Para correr este codigo debes tener instalado  Nodejs y Angular Cli y Git.
Una vez descargado el codigo con "Git pull"(Debes tener algunos cconocimmientos), instalas las dependencias con:
    npm i
Despues ejecutas el servidor de desarrollo con:
    ng serve

##Funcionalidad:

Este cliente funciona como interfaz grafica de un backend desarrollado en Nodejs. Se consume como Rest-Api y
se autentica con el backend mediante ciertos metodos.

Puedes verificar los directorios  de components, models y services para verlos modulos desarrollados.

## Librerias adiconales:

Estos modulos permiten apliar la funcionalidad de ciertas caracteristicas de la aplicación.

    -bootstrap: Aplicar estilos css al clente.
    -jquery: Extiende funcionalidad de bootrap.
    -ngx-toastr: Permite manejar notificaciones en pantalla despues de un evento.
    -rxjs: Permite enviar encabezados http con mas parametros.
    -angular2-moment: Permite formatear fechas para que sean mas comprensibles.
    -@angular/material: Permite manejar modales de una forma mas facil.