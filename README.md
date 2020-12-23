# Blackjack

El objetivo es desarrollar un juego de cartas llamado **Blackjack**, también conocido como *veintinuo*, donde el usuario puede competir contra el ordenador. El juego consiste en sumar mediante cartas un valor lo más cercano posible a 21 pero sin pasarse. ¡Buena suerte!

El proyecto forma parte de un curso de Udemy de Fernando Herrera llamado 'JavaScript moderno: Guía para dominar el lenguaje'. Por tanto he seguido sus lecciones como referencia y el código base es de su autoría, pero voy a introducir modificaciones propias y mejoras en el mismo: mayor semántica y accesibilidad a través de HTML, uso de SASS y sus correspondientes partials para trabajar de manera más ordenada, automatización de tareas mediante Gulp y mejora del UX.

### Tecnologías usadas:

- HTML5, CSS3 y SASS
- JavaScript ES6
- Gulp (usando el Adalab web starter kit) y Git

### Pasos para arrancar el proyecto:

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit:

1. Instala las dependencias locales ejecutando en la terminal el comando:

```bash
npm install
```

2. Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. Para ello ejecuta el comando:

```bash
npm start
```

### Estructura de carpetas

La estructura de carpetas sigue este esquema:

```
src
 ├─ api // los ficheros de esta carpeta se copian en public/api/
 |  └─ data.json
 ├─ images
 |  └─ logo.jpg
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ main.js
 |  └─ events.js
 ├─ scss
 |  ├─ components
 |  ├─ core
 |  ├─ layout
 |  └─ pages
 └─ html
    └─ partials
```

---

Muchas gracias por leer hasta aquí. Glhf! :) 
