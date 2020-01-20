# Proyecto Garbarino endpoint+frontend

NOTA: es necesario tener instalado node. 

## 1. Abrir dos consolas.
## 2. En la primer consola, entrar a la carpeta frontend y correr el comando `npm install`
## 3. En otra consola, entrar a la carpeta blacklist y correr el comando `npm install`
## 4. En la consola de frontend, correr el comando: `npm start`
## 5. En la consola de backend, correr el comando `node ./server.js` o `nodemon ./server`.
Un servidor en el puerto 9000 se levantara y el front en el puerto 3000.

## 6. Para editar la visibilidad de un producto, se puede realizar por patch en el endpoint ingresando:
`[PATCH]localhost:9000/products/:id/` pasando por body el valor (true/fale):
{
	"enabled":"valor"
}

Siendo id: el id del producto y el valor true/false segun correponda actualizar.

## 7. Para obtener el estado actual de los productos en formato json ingresar en:
`[GET]localhost:9000/products/all`

## 8. Para obtener el listado de todos los productos enabled, utilizar:
`[GET]localhost:9000/products/`
Esto sirve para no gastar recursos en traer al front los productos que estan deshabilitados.



### Funcionalidad extra: 
- Maneja los acentos en utf-8.
- Checkea que el item clickeado en la lista general coincida con el de la segunda api.
- Componente error (en lugar de solo texto)



Hecho por Ramiro D'Accorso