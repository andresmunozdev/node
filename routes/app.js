const express = require ('express');
const pelicula = require ('../controller/route_pelicula')

const app = express.Router();

//listar peliculas app
app.get('/listarPeliculas', pelicula.listarPeliculas) ;
// listar pelicula web
app.get('/listarContenido', pelicula.listarContenido);

// agregar pelicula post
app.post('/addPelicula', pelicula.addPelicula);

// editar pelicula
    //get - pedir los datos
app.get('editPelicula', pelicula.editPelicula);
    //post - guardar los datos
app.post('edit_Pelicula', pelicula.edit_Pelicula);

// eliminar pelicula
app.get('deletePelicula', pelicula.deletePelicula);

module.exports = app; 