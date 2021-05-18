const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CATEGORIAS = ["Fofoca", "Crime", "Viação"];

// create student schema & model
const NewSchema = new Schema({
  titulo: {
    type: String,
  },
  subtitulo: {
    type: String,
  },
  data: {
    type: Date,
    default: Date.now,
  },
  autor: {
    type: String,
  },
  conteudo: {
    type: String,
  },
  enable: Boolean,
  numVisualizacoes: Number,
  categorias: String,
  urlImage: String,
});

const news = mongoose.model("noticias_pd", NewSchema);

module.exports = news;
