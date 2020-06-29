# almundo-test

# Como iniciar la aplicación 

#1- API

1.1 - instalar dependencias de la API (/api) *npm install*

1.2 - clonar la base de datos 
	ejecutar el comando *mongorestore* (con una instancia de mongoDB inciada) dentro de la carpeta db en la raiz del proyecto
	
1.3 - La aplicacion esta configurada para conectarce a la base de datos en localhost:9000, para configurar esto editar el archivo config.js ubicado en */api/config* y reemplazar modificar la propiedad *db*

1.4 - ejecutar el archivo app.js *(/api/app.js)* con el comando *node app*

#2- front

2.1 - instalar dependencias de la public (/public) *npm install*

2.2 - ejecutar el compando *npm start* o *ng serve* dentro de la misma 
	
2.3 - la URL con la cual se apunta a la API se puede cambiar desde */public/src/enviroments/enviroments.ts* modificando la propiedad *baseUrl*


Nota:

queda pendiente modularizar el front end y realizar las llamadas de la API en un servicio.


	