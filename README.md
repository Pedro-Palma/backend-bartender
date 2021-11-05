# backend-bartender

## Challenge aldeamo

El API realizada tiene como función principal el manejo de arrays en la cual se tienen almacenados números de vasos. La función consiste en comprobar si los números de vasos son uniformemente divisibles (el array se ordena de manera descendente) entre un array de números primos el cuál es generado automáticamente y dinámicamente dependiendo de la longitud de del array de números de vasos, si son uniformente divisibles se estaran guardando en un array B y a su vez se estarán añadiendo a la respuesta los que a su vez no son uniformemente divisibles se guardan en un array A el array se actualiza y se vuelve a repetir el ciclo dependiendo el número de iteraciones que ingresamos, cuando llegamos al número de iteraciones indicado se añade a la respuesta los números que se tienen guardados en el arreglo A. Para poder realizar la función se debe ingresar un número de "Id" el cual selecciona la pila de datos con la cual estaremos trabajando y también ingresaremos "it" que hace referencia al número de iteraciones que deseamos realizar.

Para poder ejecutar el proyecto debe clonar el repositorio.

## Setup

Use `nvm` para instalar de manera correcta la versión de node:
```shell script
nvm install
```

Copiar `.env.example` en `.env`.
```shell script
cp .env.example .env
```

Instalar packages.
```shell script
npm install
```

Correr la aplicación.
```shell script
npm run dev
```
# Technology

El API fue realizado con:
- [NodeJs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Objection.js](https://vincit.github.io/objection.js/)
- [Knex.js](http://knexjs.org/)

Se realizaron validaciones de los parámetros con la librería:

-[Joi](https://joi.dev/)


