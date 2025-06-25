require('dotenv').config();

const mongoose = require('mongoose');

//Sintáxis del URI: USUARIO:CONTRASEÑA@CLUSTER/BASE_DE_DATOS
const MONGODB_URI = `mongodb+srv://${process.env.BD_USUARIO}:${process.env.BD_PASSWORD}@${process.env.CLUSTER}.d8xoue1.mongodb.net/${process.env.BD_NOMBRE}?retryWrites=true&w=majority&appName=escueladb`;
// Conectamos a bd
mongoose.connect(MONGODB_URI)
.then (db => console.log('BD conectada'))
.catch(err => console.log(err));
 