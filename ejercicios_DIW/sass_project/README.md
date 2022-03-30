
Comienzo:

Crear carpetas css y scss e introducir sus respectivos documentos (styles.css y styles.scss).

Realizar los siguientes comandos:

- ``npm init``

El siguiente comando es:
- ````npm install sass````

Per compilar un fitxer (des de directori /SCSS),

sass scss/styles.scss css/styles.css


Y después dentro del archivo package.json en el apartado de script añadimos los siguientes comandos:
- ````"sass": "sass scss/styles.scss:css/styles.css",
    "sass-watch": "sass --watch scss/styles.scss:css/styles.css"

