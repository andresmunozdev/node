const { Schema, model } = require ('mongoose');

const Pelicula = Schema({
    titulo:         {type: String, require:[true, "Titulo Obligatorio"]},
    imagen:         {type: String, require:[true, "Imagen es requerida"]},
    categoria:      {type: String, require:[true, "Categoría es Obligatorio"]},
    descripcion:    {type: String, require:[true, "Descripción es requerida"]},
    url:            {type: String, require:[true, "url es requerida"]},
})

module.exports = model('peliculas', Pelicula); 