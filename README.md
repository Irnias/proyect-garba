# Proyecto Garbarino endpoint+frontend

## 1. En la consola, entrar a la carpeta frontend y correr el comando `npm install`
## 2. En otra consola, entrar a la carpeta blacklist y correr el comando `npm install`
## 3. Correr el comando `npm start` en las dos consolas.
Un servidor en el puerto 9000 se levantara y el front en el puerto 3000.
## 4. Para editar la visibilidad de un producto, se puede realizar en el endpoint ingresando:
`localhost:9000/blacklist/:id/:valor` Siendo id: el id del producto y el valor true/false segun correponda actualizar.
## 5. Para obtener el estado actual de los productos en formato json ingresar en:
`localhost:9000/blacklist`


Para no lidiar con cors, use un enpoint gratuito de heroku.
En una aplicacion mas grande, seria ideal escalar con un mongodb en lugar de almacenar en memoria.
