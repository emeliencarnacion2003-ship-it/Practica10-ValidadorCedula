
# Validador de Cedula 

## Descripción

Este proyecto consiste en desarrollar un servicio web para validar
cedulas de identidad mediante el algoritmo modulo 10.

El sistema  nos permite ingresar una cedula de 11 digitos y comprobar
si su digito verificador coincide con el resultado del algoritmo.

## Objetivo

Aplicar los conocimientos de desarrollo web, JavaScript y Node.js
para construir un servicio web que permita validar una cédula.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- Git y GitHub

## Estructura del proyecto

- Model: contiene la lógica del algoritmo de validación.
- Controller: recibe los datos y procesa las solicitudes.
- routes: define los endpoints del servicio web.
- public: contiene la interfaz HTML, CSS y JavaScript.
- server.js: inicia el servidor.

## Instalación

1. Clonar el repositorio.
2. Abrir la carpeta del proyecto en VS Code.
3. Instalar las dependencias:

   npm install

4. Iniciar el servidor:

   npm run dev

5. Abrir en el navegador:

   http://localhost:3000

## Endpoint de la API

Método: POST

Ruta: /api/validar

Ejemplo de solicitud:

{
  "cedula": "12345678911"
}

## Algoritmo

Se utiliza el algoritmo módulo 10 para calcular el digito
verificador a partir de los primeros diez dígitos de la cédula.

