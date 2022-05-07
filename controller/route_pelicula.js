const express = require ('express');
// Modelo BD
const Pelicula = require ('../models/model_pelicula');
// conexion BD
const pool = require ('../settings/db');

//app
let listarPeliculas = async (req, res) => {
    const model = await Pelicula.find()
        Pelicula.countDocuments({},(err, total) => { 
            if(err){
                return res.json({
                    stuatus: 400,
                    mensaje: "Error al leer el archivo",
                    err
                })
            }
            res.json({stuatus:200, total, model })
            console.log(model);
            })
  };

//web
let listarContenido = async (req, res) => {
    const pelicula = await Pelicula.find()
    Pelicula.countDocuments({},(err, total) =>{ 
        if(err){
            return res.json({
                stuatus: 400,
                mensaje: "Error al leer el archivo",
                err
            })
        }
        res.render('index', {pelicula }) 
    })
};

//agregar pelicula
let addPelicula = async (req, res) => {
    const { titulo, imagen, categoria, descripcion, url } = req.body; 
    const pelicula = await new Pelicula({
        titulo,
        imagen,
        categoria,
        descripcion,
        url
    })
    pelicula.save((err, data) => {
        if (err) {
            return res.json({
                stuatus: 200,
                mensaje: "error al agregar la pelicula",
                err 
            })
        }
        res.redirect('/api/listarContenido');
    })
}

// editar pelicula get
let editPelicula = async ( req, res) => {
    let id = req.params._id;
    const pelicula = await Pelicula.findById(id);
    res.render('editpelicula', {pelicula})
}

// edit pelicula post
let edit_Pelicula = async ( req, res) => {
    let id = req.params;
    const {titulo, imagen, categoria, descripcion, url} = req.body;
    const edit_pelicula = {
        titulo,
        imagen,
        categoria,
        descripcion,
        url
    }
    const pelicula = Pelicula.update({id: id}, edit_pelicula)
    res.redirect('/api/listarContenido');
}

// eliminar pelicula get
let deletePelicula = async (req, res) => {
    let id = req.params;
    await Pelicula.findOneAndDelete({_id: id});
    res.redirect('/api/listarContenido')
}

  module.exports = {
    listarPeliculas, 
    listarContenido,
    addPelicula,
    editPelicula,
    edit_Pelicula,
    deletePelicula
  };