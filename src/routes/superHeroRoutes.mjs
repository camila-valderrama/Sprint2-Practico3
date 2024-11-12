import express from 'express';
import { 
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller
    } from '../controllers/superheroesController.mjs';

const router = express.Router();

//Rutas
app.get('/heroes', obtenerTodosLosSuperheroesController);
app.get('/heroes/:id', obtenerSuperheroePorIdController);
app.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

export default router;